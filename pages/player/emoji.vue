<template>
    <div class="emoji">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
      >
        <van-image
          class="emoji-img"
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
import _ from 'lodash'
import { ImagePreview } from 'vant'
// import { searchJson } from '~/api/splider';
export default {
  data () {
    return {
      loading: false,
      finished: false,
      list: [],
    }
  },
  props: {
  },
  methods: {
    imgPreview (e, item) {
      ImagePreview([item])
    },
    async initData () {
      // this.list = await searchJson({page: this.page});
      const baseUrl = `${this.baseCDNUrl}/album`;
      const data = await this.octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'zenquan',
        repo: 'diagrams',
        path: 'album'
      })

      if (data && data.status) {

      }
      this.list = _.map(data.data, d => {
        return `${baseUrl}/${d.name}`
      })

      console.log('list>>>', this.list);
    },
  },
  computed: {
  },
  components: {
  },
  created() {
  },
  mounted() {
    this.initData();
  },
  destroyed() {
  }
};
</script>
<style lang="less" scoped>
  .emoji {
    padding: 15px;
    .emoji-img {
      margin: 5px 7px ;
    }
  }
</style>
