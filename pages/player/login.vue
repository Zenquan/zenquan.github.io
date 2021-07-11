<template>
  <div class="login">
    <header class="login-header">
      <h3>登录玩呢</h3>
      <p>留下精彩的段子</p>
    </header>
    <div class="login-form">
      <van-cell-group>
        <van-field v-model="name"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ nameValidator, message: '请填写用户名' }]"/>
        <van-field
          type="password"
          v-model="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"/>
      </van-cell-group>
      <van-button
        type="info"
        class="login-btn"
        @click="onSubmit"
        >{{loginBtn}}
      </van-button>
    </div>
    <footer class="footer" @click="loginOrRegister">
      还没有账号，点击{{registerBtn}}
    </footer>
  </div>
</template>
<script>
import { Toast } from 'vant';
import { login } from '~/api/zhihu';
export default {
  data () {
    return {
      name: '',
      password: '',
      isRegistered: true,
      loginBtn: '登录',
      registerBtn: '注册'
    }
  },
  props: {
  },
  methods: {
    nameValidator () {
      console.log('>>>', this.name);
    },
    async onSubmit () {
      if (this.name && this.password) {
        const result = await login({
          name: this.name,
          password: this.password
        })

        const {msg, data: {token}} = result
        await localStorage.setItem('token', token)
        await Toast(msg)
        await this.$router.push('/player')
      }
    },
    loginOrRegister () {
      this.isRegistered = !this.isRegistered;
      if (this.isRegistered) {
        this.loginBtn = '注册并登录'
        this.registerBtn = '登录'
      } else {
        this.loginBtn = '登录'
        this.registerBtn = '注册'
      }
    }
  },
  computed: {
  },
  components: {
  },
  created() {
  },
  mounted() {
  },
  destroyed() {
  }
};
</script>
<style lang="less" scoped>
@info-bgcolor: #06f;
@primary-color: #fff;
@primary-font-size: 16px;
@big-font-size: 25px;
@small-font-size: 12px;

.login {
  .login-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 108px;
    padding: 0;
    background: @info-bgcolor;
    color: @primary-color;
    font-size: @primary-font-size;
    h3 {
      font-size: @big-font-size;
    }
  }
  .login-form {
    padding: 20px 16px;
    text-align: center;
    .login-btn {
      width: 100%;
      height: 40px;
      margin-top: 32px;
      color: @primary-color;
      font-size: @primary-font-size;
      background: @info-bgcolor;
      border-radius: 3px;
    }
  }
  .footer {
    padding: 0 16px;
    font-size: @small-font-size;
    color: #8590a6;
    position: absolute;
    right: 2px;
  }
}
</style>
