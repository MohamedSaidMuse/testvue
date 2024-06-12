<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/1.png">
    <HelloWorld msg="Hi I am here to present"/>
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
