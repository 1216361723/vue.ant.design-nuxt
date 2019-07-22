export default {
  namespaced: true,
  state: {
    menuLang: [],
    langs: 'zh'
  },
  mutations: {
    setLang(state, list) {
      state.menuLang = list
    }
  }
}
