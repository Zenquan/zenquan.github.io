<template>
  <div class="project-card" @click="goToHTML(repo.html_url)">
    <h3 class="name">{{repo.name}}</h3>
    <p class="description">{{repo.description}}</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    repo: {
      type: Object
    }
  },
  methods: {
    goToHTML (url) {
      window.location.href = url
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
.project-card {
  text-decoration: none;
  overflow: hidden;
  width: 80vw;
  margin-bottom: 10px;
  padding: 10px;
  color: inherit;
  background: #fff;
  border: 1px solid #e3e3e3;
  box-shadow: 6px 6px 6px -6px rgba(0, 0, 0, 0.33);
  transition: box-shadow 0.4s;
  border-radius: 10px;
  cursor: pointer;
  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    outline: none;
    text-decoration: none;
    box-shadow: 0 6px 30px -6px rgba(0, 0, 0, 0.33);
  }
  @media all and (max-width: 600px) {
    display: block;
  }
  .name {
    font-size: 20px;
  }
  .description {
    font-size: 14px;
  }
}
</style>
