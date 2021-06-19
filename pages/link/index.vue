<template>
  <div class="easy-link">
    <van-tabs v-model="active">
      <!-- ${index} -->
      <van-tab
        :title="item.title"
        v-for="(item, index) of tabs"
        :key="`TAB-${index}`"
      >
        <div class="content" :class="`content-1`">
          {{ item.body }}
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import { Octokit } from "@octokit/core";
import { Toast } from "vant";
const octokit = new Octokit({
  auth: "3209a83dfb7f59bbb854e11d34f4737abe87a2b5"
});
export default {
  data() {
    return {
      active: 2,
      tabs: [],
      issuesNumbers: [],
      comments: []
    };
  },
  props: {},
  methods: {
    async fetch() {
      const issues = await octokit.request("GET /repos/{owner}/{repo}/issues", {
        owner: "zenquan",
        repo: "EasyLink"
      });
      if (issues.status === 200) {
        const { data } = issues;
        data.forEach(async d => {
          this.issuesNumbers.push({
            number: d.number,
            comments: d.comments
          });

          this.tabs.push({
            title: d.title,
            body: d.body
          })
        });

        if (this.issuesNumbers.length) {
          this.issuesNumbers.forEach(async n => {
            if (n.comments) {
              const comments = await octokit.request(
                "GET /repos/{owner}/{repo}/issues/{issue_number}/comments",
                {
                  owner: "zenquan",
                  repo: "EasyLink",
                  issue_number: n.number
                }
              );

              if (comments.status === 200) {
                const {data} = comments
                this.comments.push(data)
              } else {
                Toast("github comments接口异常");
              }
              // await comments.forEach(comment => {
              //   this.tabs.push({
              //     title: comment.title,
              //     body: comment.body
              //   })
              // })
            }
          });
        } else {
          Toast("github issues数量为0");
        }
      } else {
        Toast("github issues接口请求失败");
      }

      console.log("this>>>", this.tabs, this.comments);
    },
    goToCard(url) {
      this.$router.push(url);
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {
    this.fetch();
  },
  destroyed() {}
};
</script>
<style lang="less" scoped>
.easy-link {
  width: 100%;
  padding: 0 32px;
  .content {
    width: 100%;
    display: flex;
    margin: 16px 0;
    height: 25vh;
    border-radius: 16px;
    box-sizing: border-box;
    background-position: center center;
    background-size: cover;
    box-shadow: 0 4px 8px rgb(0 0 0 / 20%);
    color: #fff;
    transition: all 0.2s;
    align-items: center;
    flex: 1;
  }
  .content-1 {
    background-image: url("../../assets/img/Flat-Mountains.svg");
  }
}
</style>
