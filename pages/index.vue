<template>
  <pbg
    src="https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/img/20210619120419.png"
    class="content-wrap"
    content-style="height: 100%"
    bg-style="#1d1f21 49.47% 60.43%/cover"
    :thumbnail="thumbnail"
  >
    <div class="content f-all-center">
      <img :src="avatar" alt="" class="avatar">
      <div class="link-blog-wrap">
        <fancy-btn href="//blog.joyenjoy.tech/" title="随笔"/>
        <fancy-btn href="https://www.cnblogs.com/Jomsou/" title="博客园"/>
        <fancy-btn href="/projects" title="项目"/>
        <fancy-btn href="/album" title="相册"/>
        <fancy-btn href="https://github.com/Zenquan/EasyLink" title="导航"/>
        <fancy-btn href="//blog.joyenjoy.tech/about/" title="关于"/>
        <fancy-btn href="//joyenjoy.tech/player/" title="玩呢"/>
      </div>
    </div>
  </pbg>
</template>

<script>
import FancyBtn from '@/components/FancyBtn.vue'
import Pbg from '@/components/Pbg.vue'
import avatar from '~/assets/img/avatar.jpeg'
import thumbnail from '~/assets/img/thumbnail.png'
export default {
  data () {
    return {
      avatar,
      thumbnail
    }
  },
  components: {
    FancyBtn,
    Pbg,
  }
}
</script>

<style lang="less">
.content-wrap {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
.content {
  height: 100%;
  will-change: transform;
  .avatar {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-bottom: 50px;
  }
}
.icon-logo {
  display: block;
  height: 50%;
  margin: 3% auto 4%;
  animation: logo-show 4s;
  @media (orientation: portrait) {
    margin: 10% auto 10%;
  }
}
.link-blog-wrap {
  display: block;
  max-height: 15%;
  text-align: center;
}
@keyframes logo-show {
  0% {
    opacity: 0;
    -webkit-transform: translate(0, 25px);
    -o-transform: translate(0, 25px);
    transform: translate(0, 25px);
  }
  20% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    -webkit-transform: translate(0);
    -o-transform: translate(0);
    transform: translate(0);
  }
}
</style>
