<template>
  <div class="error f-all-center">
    <div v-if="error.statusCode === 404"
      class="error-404">
      <img :src="img404" alt="">
      <h3>404</h3>
      <p>你似乎来到空间站不存在的荒原</p>
    </div>
    <div class="error-404"
      v-else>
        <p>有错误出现</p>
    </div>
    <Button
      type="info"
      class="go-index"
      @click="goIndex">
        去往首页
    </Button>
  </div>
</template>

<script>
  import {
    Button
  } from 'vant';

  export default {
    props: ['error'],
    layout: 'error', // you can set a custom layout for the error page
    data() {
      return {
        img404: 'http://zhstatic.zhihu.com/assets/error/liukanshan_wire.svg'
      }
    },
    methods: {
      goIndex () {
        this.$router.push('/index')
      }
    },
    components: {
      Button
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
      width: 140px;
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
