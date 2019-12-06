<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import request from './util/request'
export default {
  name: 'app',
  methods: {
    async test () {
      const user = await request.get('/users')
      console.log(user)
    }
  }
}
</script>

<style>
</style>
