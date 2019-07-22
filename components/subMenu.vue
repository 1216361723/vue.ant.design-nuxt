<template functional>
  <a-sub-menu
    :key="props.menuInfo.id"
  >
    <span slot="title">
      <a-icon :type="props.menuInfo.icon" />
      <span>
        {{ props.menuInfo.zh_name }}
        <!-- {{ lang === 'zh' ? props.menuInfo.zh_name  : props.menuInfo.en_name }} -->
      </span>
    </span>
    <template v-for="item in props.menuInfo.list">
      <a-menu-item
        v-if="!item.list"
        :key="item.id"
      >
        <!-- <a-icon :type="item.icon" /> -->
        <nuxt-link :to="item.path">
          {{ item.zh_name }}
          <!-- {{ lang === 'zh' ? item.zh_name  : item.en_name }} -->
        </nuxt-link>
      </a-menu-item>
      <sub-menu
        v-else
        :key="item.key"
        :menu-info="item"
      />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  props: ['menuInfo']
}
</script>
