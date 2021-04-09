<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    MainTabBar: require('components/content/tabbar/MainTabBar').default
  }
};
</script>

<style></style>
