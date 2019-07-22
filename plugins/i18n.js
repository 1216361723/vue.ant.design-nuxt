/**
 * @Description: i18n插件.
 * @Author: hollisy
 * @Created: 2018/7/18 上午10:52
 * @Email: hollisy@163.com
 */
export default function ({ app }) {
  app.i18n.beforeLanguageSwitch = (oldLocale, newLocale) => {
    console.log(newLocale)
    localStorage.setItem('locale', newLocale)
  }
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    // localStorage.setItem('locale', newLocale) // 本地保存locale
    // app.store.commit('hospital/findAll',{locale:newLocale})
    // 语言切换强制重新加载当前路由，解决页面不刷新问题
    // const {router} = app || {}
    // router && router.go(0)
  }
}
