<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <AppWelcome msg="Welcome to Simple Vue App"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import AppWelcome from '@/components/AppWelcome.vue' // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
    AppWelcome
  }
})
</script>
