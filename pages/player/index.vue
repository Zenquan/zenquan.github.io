<template>
  <div class="container">
    <!-- 表情包 -->
    <Emoji v-if="active===1"></Emoji>
    <!-- 用户中心 -->
    <User v-else-if="active===2"></User>
    <!-- 底部导航栏 -->
    <footer>
      <van-tabbar v-model="active"
        active-color="#06f">
        <van-tabbar-item badge="3">
          <span>首页</span>
          <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
          </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">表情包</van-tabbar-item>
        <van-tabbar-item icon="setting-o"
          @click="goUserCenter"
          >我的</van-tabbar-item>
      </van-tabbar>
    </footer>
  </div>
</template>

<script>
import Emoji from './emoji';
import User from './user';
export default {
  layout: "default",
  data() {
    return {
      // 底部导航栏
      active: 0,
      icon: {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
      },
    };
  },
  methods: {
    onLoad() {
    },
    goUserCenter () {
    }
  },
  mounted() {
  },
  components: {
    Emoji,
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
