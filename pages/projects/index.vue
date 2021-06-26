<template>
  <div class="projects">
    <van-loading
      class="f-all-center loading"
      type="spinner"
      color="#1989fa"
      v-if="loading">
      加载中...
    </van-loading>
    <header class="header">
      <button class="home-btn" @click="goToHome">Home</button>
      <div class="projects-Intro f-all-center">
        <h1>Zenquan的项目</h1>
        <p>用心写好代码，用心阅读生活。</p>
      </div>
    </header>
    <div class="projects-list">
      <ProjectCard v-for="(item, index) of list"
        :key="index"
        :repo="item"
      />
    </div>
    <footer class="footer">
        <p>Zenquan的空间站 ©2021 Created by Jomsou@qq.com</p>
        <a target='_blank' href='https://github.com/zenquan/zenquan.github.io'>
          github地址
        </a>
    </footer>
  </div>
</template>
<script>
import ProjectCard from '@/components/ProjectCard'
export default {
  data () {
    return {
      loading: false,
      per_page: 0,
      list: []
    }
  },
  props: {
  },
  methods: {
    async handleFetch (url, config) {
      this.loading = true
      const data = await this.octokit.request(url, config)
      if (data.status === 200) {
        this.loading = false
        return data.data
      } else {
        Toast('请求失败，请重新刷新页面')
      }
    },
    async fetchUser () {
      const data = await this.handleFetch('GET /users/{username}', {
        username: 'Zenquan'
      })

      this.per_page = data.public_repos
    },
    async fetchRepos (per_page) {
      this.list = await this.handleFetch('GET /users/{username}/repos', {
        username: 'Zenquan',
        per_page
      })
    },
    async init () {
      await this.fetchUser()
      await this.fetchRepos(this.per_page)
    },
    goToHome () {
      this.$router.push('/')
    }
  },
  computed: {
  },
  components: {
    ProjectCard
  },
  created() {
  },
  mounted() {
    this.init()
  },
  destroyed() {
  }
};
</script>
<style lang="less" scoped>
@bg-color: #2090fe;
@intro-font-color: #fff;
.projects {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  .loading {
    margin-top: 250px;
  }
  .header {
    width: 100%;
    height: 200px;
    background: @bg-color;
    position: fixed;
    .home-btn {
      width: 5em;
      height: 1.5em;
      line-height: 1.5em;
      text-align: center;
      border: 1px solid @intro-font-color;
      border-radius: 4px;
      color: @intro-font-color;
      transition: all 0.4s;
      position: absolute;
      top: 20px;
      right: 20px;
      &:hover {
        text-decoration: none;
        color: #333;
        background: @intro-font-color;
      }
    }
    .projects-Intro {
      height: 100%;
      color: white;
      font-weight: 900;
      text-shadow: 0 4px 4px rgb(0 0 0 / 20%);
      h1 {
        font-size: 30px;
      }
      p {
        font-size: 15px;
      }
    }
  }
  .projects-list {
    height: 80vh;
    overflow-y: auto;
    margin-top: 220px;
    padding: 0 20px;
  }
  .footer {
    height: 100px;
    font-size: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
