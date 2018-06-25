<template>
  <div id="app">
    <nav-bar />
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition-property: opacity;
    transition-duration: .25s;
  }

  .fade-enter-active {
    transition-delay: .25s;
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
