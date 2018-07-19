<template>
  <header>
    <nav class="container">
      <router-link to="/reserva" href="javascript::void(0)" class="brand">
        <img src="../assets/img/default.jpg" alt="">
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
  header {
    height: 50px;
    background-color: #1b2125;

    nav {
      height: 100%;
      display: flex;
    }

    .brand {
      margin: auto 0;
      width: 80px;
      height: 40px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
</style>
