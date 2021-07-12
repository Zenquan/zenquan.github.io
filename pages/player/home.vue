<template>
  <CardSwiperSlide :followingJokes="followingJokes"/>
</template>
<script>
import CardSwiperSlide from './components/CardSwiperSlide'
export default {
  data() {
    return {
    };
  },
  props: {
    followingJokes: {
      type: Array,
      default: []
    }
  },
  beforeMount() {},
  methods: {},
  components: {
    CardSwiperSlide
  }
};
</script>
<style lang="less" scoped>

</style>
