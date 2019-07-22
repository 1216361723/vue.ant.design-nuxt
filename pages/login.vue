<template>
  <div class="login">
    <div class="text text-center">
      当前您需要登录才能访问！
    </div>
    <div class="btn text-center">
      <a-button type="primary" @click="handleback">返回</a-button>
      <a-button type="primary" @click="handleClick">登录</a-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handleClick() {
      window.localStorage.setItem('token', 123)
      this.handleback()
    },
    handleback() {
      const path = window.localStorage.getItem('path') || '/'
      console.log(path)
      this.$router.push({ path: path })
    }
  }
}
</script>
<style lang="scss">
.login {
    .text {
        line-height: 200px;
    }
.btn {
    width: 200px;
    height: 80px;
    line-height: 80px;
    margin: auto
}
}

</style>
