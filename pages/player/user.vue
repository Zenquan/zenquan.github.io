<template>
  <div class="user">
    <header class="header">
      <div class="intro intro-pad">
        <img :src="userInfo.avatar_url" alt="" class="avatar">
        <h3 class="name">{{userInfo.name}}</h3>
        <p class="headline">{{userInfo.headline}}</p>
        <section class="f-all-center items">
          <div v-for="(item, index) of items"
            :key="index" class="item">
            <p class="item-nums">{{item.nums}}</p>
            <p class="item-title">{{item.title}}</p>
          </div>
        </section>
        <van-tabs v-model="active" class="buttons">
          <van-tab
            v-for="(item, index) of buttons"
            :key="index"
            :title="item.title"></van-tab>
        </van-tabs>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  props: {
    userInfo: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      buttons: [
        {title: '作品'},
        {title: '喜欢'},
        // {title: '设置'}
      ],
      active: 2,
    }
  },
  computed: {
    followingNums () {
      return this.userInfo?.following?.length
    },
    messageNums () {
      return this.userInfo?.messages?.length
    },
    items () {
      return [
        {title: '关注', nums: this.followingNums},
        {title: '消息', nums: this.messageNums}
      ]
    }
  }
};
</script>
<style lang='less'>
.user {
  .header {
    .header-bg-img {
      width: 100vw;
      height: 50vw;
      position: absolute;
      z-index: -1;
    }
    .intro {
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 2px solid #fff;
      }
      .headline, .name {
        margin: 10px 0;
        margin-bottom: 0;
      }
      .items {
        flex-direction: row;
        text-align: center;
        margin-bottom: 10px;
        .item {
          margin: 0 10px;
          width: 50px;
          height: 50px;
        }
      }
      .buttons {
        width: 100%;
      }
    }
    .intro-pad {
      padding-top: 60px;
    }
  }
}
</style>
