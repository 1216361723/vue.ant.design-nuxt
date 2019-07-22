<template>
  <div class="error-page">
    <div class="box">
      <a-icon type="frown" />
      <h1 v-if="error.message">
        {{ error.message }}
      </h1>
      <h1 v-else>
        应用发生错误
      </h1>
      <p>
        <a-button type="primary" @click="handleClick">
          <a-icon type="left" />返回
        </a-button>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  // name: 'error',
  props: {
    error: {
      type: Object,
      default: undefined
    }
  },
  methods: {
    handleClick() {
      this.$router.back()
    }
  }
}
</script>
<style scoped lang="scss">
.error-page{
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: #333;
  text-align: center;
  .box {
    padding-top: 30%;
    i {
      color: #f9f1e9;
      &.anticon-frown {
        font-size: 8em;
      }
    }
    h1 {
      font-size: 3em;
      color: #f9f1e9;
    }
    span {
      font-size: 2em;
      color: #f9f1e9;
    }
  }
}
</style>
