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
  updated(){
    
  },
  components: {
    NavBar,
  },
  data(){
    return {
      estaLogado : false
    }
  }
};
</script>

<style lang="scss">
  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #242c31;
  }

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
