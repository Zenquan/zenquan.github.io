<template>
  <div class="user">
    <header class="header">
      <img :src="headerBgImg" alt="" class="header-bg-img">
      <div class="intro intro-pad">
        <img :src="userInfo.avatar" alt="" class="avatar">
        <h3>{{userInfo.name}}</h3>
        <van-button type="info"
          class="edit-info"
          >编辑资料</van-button>
      </div>
    </header>
  </div>
</template>
<script>
import avatar from '~/assets/img/avatar-1.png'
export default {
  data() {
    return {
      headerBgImg: 'https://pic4.zhimg.com/v2-b03bf7abe3707d8cc7ddd2c6ece00ff2_r.jpg',
      userInfo: {
        avatar,
        name: 'Zenquan',
      }
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
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 2px solid #fff;
      }
      .edit-info {
        margin: 12px auto;
        height: 40px;
        border-radius: 5px;
        padding: 0 16px;
        line-height: 40px;
        background: #06f
      }
    }
    .intro-pad {
      padding-top: calc(50% - 60px);
    }
  }
}
</style>
