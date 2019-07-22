import Vue from 'vue'
import Axios from 'axios'
import qs from 'qs'

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。'
// }
/* 开发、测试、生产'IP/域名'地址 */
const URLMAP = {
  development: 'http://localhost:3000',
  uat: 'http://blog.yangser.cn/bapi/',
  production: 'http://blog.yangser.cn'
}

/* 通用请求参数 */
const commonPrms = {
  language: ''
}

/* Vue实例Get、Post */
const REQUEST = {
  getCommonsPrms() {
    return { ...commonPrms, language: localStorage.getItem('locale') === 'zh' ? 'zh_CN' : 'en_US' }
  },
  install(Vue, options) {
    Vue.prototype.$axGet = (req) => {
      const url = URLMAP[process.env.NODE_ENV] + req.path
      const params = req.params ? { ...this.getCommonsPrms(), ...req.params } : this.getCommonsPrms()
      return Axios.get(url, { params })
    }
    Vue.prototype.$axPost = (req) => {
      const url = URLMAP[process.env.NODE_ENV] + req.path
      const data = req.data ? { ...this.getCommonsPrms(), ...req.data } : this.getCommonsPrms()
      return Axios.post(url, data)
    }
    Axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
    // Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencodedcharset=UTF-8'
    Vue.prototype.$axPostForm = (req) => {
      const url = URLMAP[process.env.NODE_ENV] + req.path
      const data = req.data ? { ...this.getCommonsPrms(), ...req.data } : this.getCommonsPrms()
      const data2 = qs.stringify(data)
      return Axios.post(url, data2)
    }
  }
}

Vue.use(REQUEST)

export default ({ app, redirect, error }, inject) => {
  // commonPrms.language = app.i18n.locale == 'zh' ? 'zh_CN' : 'en_US'
  /* 获取commonPrms */
  const getCommonsPrms = () => {
    return { ...commonPrms, language: app.i18n.locale === 'zh' ? 'zh_CN' : 'en_US' }
  }

  /* 捕获code不为0的请求 */
  const catchErrorEsp = (rsp) => {
    if (rsp.status === 200) {
      if (rsp.data.code !== 200) {
        // console.log('the code != 0',rsp.data)
        error({
          statusCode: 200,
          message: process.env.NODE_ENV !== 'production' ? `path: ${rsp.config.url}   ${rsp.data.msg}` : rsp.data.msg
        })
      }
    } else {
      error({ statusCode: rsp.data.code, message: rsp.data.msg })
    }
    return rsp
  }

  /* 从error中获取http状态码 */
  const getStatusCodeFromError = (error) => {
    if (!error || !error.response) {
      return 500
    }
    return error.response.status
  }
  /*
  * Get
  * */
  app.axGet = async (req) => {
    const url = URLMAP[process.env.NODE_ENV] + req.path
    const params = await req.params ? { ...getCommonsPrms(), ...req.params } : getCommonsPrms()
    return Axios.get(url, { params }).then(catchErrorEsp).catch((e) => {
      error({ statusCode: getStatusCodeFromError(e), message: app.i18n.t('httpStatusCode.' + getStatusCodeFromError(e)) })
    })
  }

  /*
  * Post
  * */
  app.axPost = async (req) => {
    const url = URLMAP[process.env.NODE_ENV] + req.path
    const data = await req.data ? { ...getCommonsPrms(), ...req.data } : getCommonsPrms()
    return Axios.post(url, data).then(catchErrorEsp).catch((e) => {
      error({ statusCode: getStatusCodeFromError(e), message: app.i18n.t('httpStatusCode.' + getStatusCodeFromError(e)) })
    })
  }

  app.axAll = async (reqs) => {
    const asyncs = []
    for (const i in reqs) {
      const url = URLMAP[process.env.NODE_ENV] + reqs[i].path
      const params = reqs[i].params ? { ...getCommonsPrms(), ...reqs[i].params } : getCommonsPrms()
      asyncs.push(await Axios.get(url, { params }))
    }

    return Axios.all(asyncs)
      .then(Axios.spread(function () {
        const rsps = []
        for (const p in arguments) {
          rsps.push(catchErrorEsp(arguments[p]))
        }
        return rsps
      })).catch((e) => {
        error({
          statusCode: getStatusCodeFromError(e),
          message: app.i18n.t('httpStatusCode.' + getStatusCodeFromError(e))
        })
      })
  }
}
