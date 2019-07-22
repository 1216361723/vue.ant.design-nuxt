// {
// "code": 200,
// "data": [
//   {
//     "id": 0,
//     "zh_name": "首页",
//     "en_name": "HOME",
//     "path": "/",
//     "icon": "home"
//   },
//   {
//     "id": 1,
//     "zh_name": "表格",
//     "en_name": "TABLE",
//     "path": "/table",
//     "icon": "table"
//   }
// }
export default ({ store, app }) => {
  app.router.beforeEach((to, from, next) => {
    if (process.client) {
      const token = window.localStorage.getItem('token')
      const has = (to.path === '/login' || to.path === '/') ? true : store.state.lang.menuLang.some((item) => { return item.path === to.path })
      if (!has) {
        next('/')
      } else if (!token && to.path === '/table') {
        window.localStorage.setItem('path', to.path)
        next('/login')
      } else {
        setTimeout(() => {
          window.localStorage.removeItem('path')
        }, 5000)
        next()
      }
    }
  })
}
