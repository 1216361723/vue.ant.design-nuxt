<template>
  <div class="header">
    <a-menu
    v-model="current"
    mode="horizontal"
    >
    <a-menu-item key="mail">
        <a-icon type="mail" />首页
    </a-menu-item>
    <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"><a-icon type="setting" />个人项目</span>
        <a-menu-item-group title="Item 1" v-if="0">
        <a-menu-item key="setting:1">Option 1</a-menu-item>
        <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
        <a-menu-item key="setting:3">Option 3</a-menu-item>
        <a-menu-item key="setting:4">Option 4</a-menu-item>
        </a-menu-item-group>
    </a-sub-menu>
    <a-menu-item key="alipay">
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">衣久久</a>
    </a-menu-item>
    </a-menu>
  </div>
</template>
