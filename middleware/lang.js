export default async function ({ store, app: { axGet } }) {
  const { data } = await axGet({ path: '/api/nuxt/menu.json' })
  store.commit('lang/setLang', data.data || [])
}
