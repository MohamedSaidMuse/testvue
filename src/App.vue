<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <WebhookHandler />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import WebhookHandler from './components/WebhookHandler.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    WebhookHandler
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
