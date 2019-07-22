<template>
  <div class="net-err ">
    <div class="info flex text-center">
      <!-- <div class="img flex-1 text-right">
        <img src="~/assets/img/ding.jpg" alt="">
      </div> -->
      <div class="err flex-1">
        {{ status ? 'loading。。。' : '当前网络异常，请检查网络～' }}
      </div>
    </div>
    <div class="back text-center" @click="handleClick">
      点击重新加载～
    </div>
    <div class="bottom" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: false
    }
  },
  methods: {
    handleClick() {
      this.$nuxt.$loading.start()
      this.status = true
      setTimeout(() => this.loadings(), 1000)
    },
    loadings() {
      console.log(this.$nuxt.isOffline)
      this.status = false
      this.$nuxt.$loading.finish()
    }
  }
}
</script>
<style scoped lang="scss">
    .net-err {
        width: 100%;
        height: 100%;
        position: absolute;
        padding: 10%;
        left: 0;
        top: 0;
        background-color: #4aa9a4;
        font-size: 18px;
        color: #fff;
        .info {
            .img {
                img {
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
            }
            .err {
                animation: dong 2s infinite;
                line-height: 100px;
            }
        }
        .back {
            background-color: #faf7d9;
            color: #1e2d4c;
            width: 290px;
            height: 50px;
            line-height: 50px;
            border-radius: 25px;
            margin: auto;
            cursor: pointer;
            animation: last-chapter__show-logo .6s ease 1.6s forwards;
            &:hover {
                // transform: scale(1);
                transform: scale(0);
                transition: all .35s cubic-bezier(0.77,0,0.17,1.02) 0s;
                background-color: #c45c66;
                color: #fff;
            }
        }
        .bottom {
            position: absolute;
            width: 100%;
            height: 60px;
            background-color: #faf7d9;
            bottom: 0;
            left: 0;
        }
    }
@keyframes last-chapter__show-logo {
    0% {
        transform: scale(0);
    }
    40% {
        transform: scale(1.1);
    }

    60% {
        transform: scale(1);
    }

    80% {
        transform: scale(1.03);
    }

    100% {
        transform: scale(1);
    }
}

@keyframes dong {
    0% {
        transform: translate(0px, 0px);
    }
    50% {
        transform: translate(0px, -30px);
    }
    100% {
        transform: translate(0px, 0px);
    }
}

</style>
