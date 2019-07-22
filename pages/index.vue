<template>
  <a-layout id="components-layout-demo-custom-trigger" class="main-page full-height">
    <a-layout-sider
      v-model="collapsed"
      class="full-height"
      collapsible
      :trigger="null"
    >
      <div class="logo text-center">
        nuxt
      </div>
      <Menu />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
        <nuxt-link v-if="0" class="pull-right" style="padding-right: 30px" :to="switchLocalePath($i18n.locale==='en'?'zh':'en')">
          <i v-if="$i18n.locale==='en'">En</i>
          <i v-else>中文</i>
        </nuxt-link>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '87vh' }">
        <div v-if="$route.path === '/'">
          asdsadas
        </div>
        <nuxt v-else/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import Menu from '~/components/menu.vue'

export default {
  middleware: 'lang',
  components: {
    Menu
    // Logo
  },
  data() {
    return {
      current: ['mail'],
      collapsed: false
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale
    }
  },
  mounted() {
    console.log(this.$i18n.locale)
  },
  methods: {
  }
}
</script>

<style scope lang="scss">
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}
.main-page {
  .logo {
    font-size: 20px;
    font-weight: bold;
    color: #fff;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
  }
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
