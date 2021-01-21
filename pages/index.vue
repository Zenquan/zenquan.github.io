<template>
  <div class="container">
    <!-- <HelloWorld /> -->
    <!-- <NuxtLink to="/logo">Logo页</NuxtLink> -->
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-image
        width="100"
        v-for="(item, index) of list"
        :key="`EMOJI-${index}`"
        height="100"
        :src="item"
        @click="(e) => imgPreview(e, item)"
      >
      </van-image>
    </van-list>
  </div>
</template>

<script>
import { ImagePreview } from 'vant';
import { searchJson } from '~/api/emoji';
export default {
  layout: "default",
  data() {
    return {
      title: "nuxt-tv",
      content: "这是一个使用nuxt搭建的tv网站",
      show: false,
      page: 1,
      loading: false,
      finished: false,
      list: []
    };
  },
  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "description", content: this.content }]
    };
  },
  render() {
    return <h1>{this.post.name}</h1>;
  },
  // async asyncData({ $axios, params }) {
  //   const emojis = await $axios.$get("/api/emoji/emoji/searchJson", {
  //     params: {page: this.page}
  //   });
  //   console.log("emojis>>>", emojis);
  //   return { emojis };
  // },
  methods: {
    showPopup() {
      this.show = true;
    },
    async initData () {
      this.list = await searchJson({page: this.page});
      console.log('list>>>', this.list);
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 1; i < 10; i++) {
          this.page = i;
          this.initData();
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    imgPreview (e, item) {
      ImagePreview([item])
    }
  },
  mounted() {
    this.initData();
    let viewHeight = document.documentElement.clientHeight; //视口高度
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop; //滚动条卷去的高度
    document.addEventListener('scroll', () => {
      console.log(">>>", viewHeight, scrollTop);
    })
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* height: 1000vh; */
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
