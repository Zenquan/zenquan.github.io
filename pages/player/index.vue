<template>
  <div class="container">
    <Home v-if="!active" :followingJokes="followingJokes"></Home>
    <!-- 广场 -->
    <Square v-else-if="active===1" :followingJokes="followingJokes"></Square>
    <!-- 素材 -->
    <Material v-else-if="active===2"></Material>
    <!-- 用户中心 -->
    <User v-else :userInfo="userInfo"></User>
    <!-- 底部导航栏 -->
    <footer>
      <van-tabbar v-model="active"
        active-color="#06f">
        <van-tabbar-item icon="home-o">
          首页
        </van-tabbar-item>
        <van-tabbar-item icon="fire-o">广场</van-tabbar-item>
        <van-tabbar-item icon="gem-o">素材</van-tabbar-item>
        <van-tabbar-item
          icon="user-o"
          badge="3"
          >我的
        </van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import Home from './home';
import Square from './square';
import Material from './material';
import User from './user';
import { getUser, followingJokesList } from '~/api/zhihu';
export default {
  layout: "default",
  data() {
    return {
      // 底部导航栏
      active: 0,
      userInfo: {},
      followingJokes: []
    };
  },
  methods: {
    async getUser () {
      const result = await getUser({
        _id: localStorage.getItem('_id')
      })
      this.userInfo = result.data
    },
    async followingJokesList () {
      const result = await followingJokesList()
      this.followingJokes = result.data
    },
    async fetch () {
      await this.followingJokesList()
      await this.getUser()
    }
  },
  mounted() {
    this.fetch()
  },
  head: {
    title: '玩呢~一起玩',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // hid is used as unique identifier. Do not use `vmid` for it as it will not work
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },
  components: {
    Home,
    Square,
    Material,
    User
  }
};
</script>

<style lang="less" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
}
</style>
