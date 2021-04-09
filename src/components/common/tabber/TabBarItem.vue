<template>
  <div class="tab-bar-item" @click="tabClick">
      <div v-if="!active"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-active-icon"></slot></div>
      <div :style="activeClass"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props: {
      path: String,
      textColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      active() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeClass() {
        return this.active ? {color: this.textColor} : {}
      }
    },
    methods: {
        tabClick() {
          this.$router.replace(this.path);
        }
    }
}
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
</style>
