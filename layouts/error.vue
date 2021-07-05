<template>
  <div class="error f-all-center">
    <div v-if="error.statusCode === 404"
      class="error-404">
      <img :src="img404" alt="">
      <p>你似乎来到空间站不存在的荒原</p>
    </div>
    <div class="error-404"
      v-else>
        <p>有错误出现</p>
    </div>
    <van-button
      type="info"
      class="go-index"
      @click="goIndex">
        去往首页
    </van-button>
  </div>
</template>

<script>
  import img404 from '~/assets/img/404-Error-rafiki.svg'
  export default {
    props: ['error'],
    layout: 'error', // you can set a custom layout for the error page
    data() {
      return {
        img404
      }
    },
    methods: {
      goIndex () {
        this.$router.push('/')
      }
    },
    components: {
    }
  }
</script>
<style lang="less">
.error {
  width: 100%;
  height: 100vh;
  text-align: center;
  .go-index {
    width: 90px;
    height: 34px;
    border-radius: 3px;
    padding: 0 16px;
  }
  .error-404 {
    img {
      margin: 0 auto;
    }
    h3 {
      margin-top: 30px;
      font-size: 30px;
      color: #646464;
    }
    p {
      color: #646464;
      font-size: 18px;
      margin-top: 10px;
      margin-bottom: 20px;
    }
  }
}
</style>
