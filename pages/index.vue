<template>
  <div class="container">
    <HelloWorld/>
    <NuxtLink to="/logo">Logo页</NuxtLink>
    <h1>{{ post.name }}</h1>
    <p>{{ post.gender }}</p>
  </div>
</template>

<script>
export default {
    async asyncData ({ $axios, params }) {
      const  post  = await $axios.$get(`http://zhihu.joyenjoy.tech/users`)
      console.log('post>>>', post);
      return { post: post[0] }
    }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
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
