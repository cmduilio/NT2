<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AppHeader title="asdasd"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    AppHeader
  }
}
</script>
