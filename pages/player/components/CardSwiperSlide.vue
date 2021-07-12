<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in followingJokes" :key="index" class="swiper-slide">
        <div class="user-info">
          <img :src="item.avatar_url" alt="" class="avatar">
          <p class="name">{{item.name}}</p>
        </div>
        <div class="content">
          <p v-html="item.content" class="content-text"></p>
          <div class="content-list">
            <img :src="item" alt=""
              v-for="(item, index) of item.imgList"
              :key="index" class="content-img">
          </div>
        </div>
        <div class="options">
          <van-icon name="share-o" size="25"/>
          <div class="options-right">
            <van-icon name="like-o" size="25"/>
            <van-icon name="chat-o" size="25" @click="chat(item.comments)"/>
          </div>
        </div>
      </div>
    </div>
    <van-popup
      v-model="popupShow"
      closeable
      round
      position="bottom"
      :style="{ height: '70%' }"
      class="popup"
    >
      <h3 class="title">评论</h3>
      <div v-for="(item, index) of comments"
        :key="index"
        class="comment">
        {{item.name}}: {{item.comment}}
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data () {
    return {
      swiperOption: { // 配置说明直接看官网
        lazy: {
          loadPrevNext: true
        },
        direction: 'vertical',
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      },
      popupShow: false,
      comments: []
    }
  },
  props: {
    followingJokes: {
      type: Array,
      default: []
    }
  },
  methods: {
    chat (comments) {
      this.popupShow = !this.popupShow
      this.comments = comments
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
.swiper-slide {
  width: 100%;
  height: 100vh;
  padding: 20px;
  padding-top: 80px;
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .avatar {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    .name {
      margin-left: 20px;
    }
  }
  .content {
    width: 100%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);
    padding: 25px;
    border-radius: 5px;
    .content-text {
      font-size: 15px;
    }
    .content-list {
      display: flex;
      margin-left: -10px;
      margin-top: 20px;
    }
    .content-img {
      width: 50px;
      height: 50px;
      margin: 10px;
    }
  }
  .options {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    .options-right {
      width: 20%;
      display: flex;
      justify-content: space-between;
    }
  }
}
.popup {
  padding: 20px;
  .title {
    margin-bottom: 20px;
  }
  .comment {
    font-size: 12px;
    margin: 10px 0;
  }
}
</style>
