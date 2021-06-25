<template>
<div class="tile is-10 is-vertical is-parent viewer-page">
  <div class="viewer-wrapper">
    <viewer :options="options" :images="images"
            @inited="inited"
            class="viewer" ref="viewer"
    >
      <template slot-scope="scope">
        <figure class="images">
          <div class="image-wrapper" v-for="{source, thumbnail, alt} in scope.images" :key="source">
            <img class="image"
                  :src="thumbnail" :data-source="source" :alt="alt"
            >
          </div>
        </figure>
      </template>
    </viewer>
  </div>
</div>
</template>

<script>
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Viewer)
Viewer.setDefaults({
  zIndexInline: 2017
})
export default {
  data () {
    return {
      options: {
        inline: true,
        button: true,
        navbar: true,
        title: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: 'data-source'
      },
      images: []
    }
  },
  computed: {
  },
  methods: {
    inited (viewer) {
      this.$viewer = viewer
    },
    async fetchImages () {
      const baseUrl = `https://cdn.jsdelivr.net/gh/zenquan/diagrams@master/album/`;
      const result = await this.octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: 'zenquan',
        repo: 'diagrams',
        path: 'album'
      })

      if (result && result.status === 200) {
        result.data.forEach(d => {
          this.images.push({
            thumbnail: `${baseUrl}${d.name}`,
            source: `${baseUrl}${d.name}`,
            alt: `${d.name}`
          })
        })
      } else {
        Toast('接口请求失败')
      }
    }
  },
  mounted () {
    this.fetchImages()
  }
}
</script>

<style lang="less" scoped>
  .viewer-page {
    height: 100vh;
  }
  .viewer-wrapper {
    position: relative;
    background: #333;
    height: 100%;
  }
  .methods {
    margin-bottom: 1em;
    flex-wrap: wrap;
    & > * {
      margin-right: 0.75rem;
    }
  }
  .options-panel {
    .panel-block {
      padding: 0;
      .checkbox {
        display: block;
        width: 100%;
        margin: 0;
        padding: 0.5em 0.75em;
      }
    }
  }
  .viewer {
    height: 100%;
    .images {
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 5px;
      .image-wrapper {
        display: inline-block;
        width: calc(33% - 20px);
        margin: 5px 5px 0 5px;
        .image {
          width: 100%;
          cursor: pointer;
          display: inline-block;
        }
      }
    }
  }
</style>
