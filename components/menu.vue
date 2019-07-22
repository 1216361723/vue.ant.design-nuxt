<template>
  <a-menu class="my-menu" theme="dark" mode="inline" :default-selected-keys="active">
    <template v-for="item in menus">
      <a-menu-item v-if="!item.list" :key="item.id">
        <a-icon :type="item.icon" />
        <nuxt-link :to="item.path">
          {{ lang === 'zh' ? item.zh_name  : item.en_name }}
        </nuxt-link>
      </a-menu-item>
      <sub-menu v-else :menu-info="item" :key="item.id"/>
    </template>
  </a-menu>
</template>
<script>
import SubMenu from '@/components/subMenu'

export default {
  data() {
    return {
      menus: this.$store.state.lang.menuLang,
      lang: '',
      active: ['1']
    }
  },
  components: {
    SubMenu
  },
  created() {
    this.lang = this.$store.state.lang.langs
    this.menus.some((item) => {
      if (this.$route.path === item.path) {
        this.active = [item.id]
      }
    })
  }
}
</script>
<style lang="scss">
.my-menu {
    .ant-menu-item > a {
        display: inline;
    }
}
</style>
