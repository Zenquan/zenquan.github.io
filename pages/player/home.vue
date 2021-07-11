<template>
  <div v-swiper="swiperOption">
    <div class="swiper-wrapper">
      <div v-for="(item, index) in dataImage" :key="index" class="swiper-slide">
        <img :src="item.imgUrl" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dataImage: [
        {
          imgUrl: require("~/assets/img/avatar.jpeg")
        },
        {
          imgUrl: require("~/assets/img/avatar.jpeg")
        },
        {
          imgUrl: require("~/assets/img/avatar.jpeg")
        }
      ],
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
      }
    };
  },
  beforeMount() {},
  methods: {}
};
</script>
<style lang="less" scoped>

</style>
