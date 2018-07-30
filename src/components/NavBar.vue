<template>
  <header>
    <nav class="container">
      <!-- <router-link to="/laboratorios" href="javascript::void(0)" class="brand"> -->
        <router-link to="/laboratorios" href="javascript::void(0)" class="link-nav">
          <h3>Laboratórios</h3>
        </router-link>
      
      <!-- <router-link to="/reserva" href="javascript::void(0)" class="brand"> -->
      <router-link to="/reserva" href="javascript::void(0)" class="link-nav">
        <!-- <img src="../assets/img/default.jpg" alt=""> -->
        <h3>Reservas</h3>  
      </router-link>
      <!-- <router-link to="/" class="btn" @click="redirect">Logout</router-link> -->
      <h3 class="link-nav">Logout</h3>
    </nav>
  </header>
</template>

<script>
export default {
  mounted(){
    console.log("---> VALOR DE LOCALSTORAGE ----> " + localStorage.length);
  },
  methods : {
    redirect(){
      localStorage.clear();
      this.$router.push('login');
    },
    isLoged(){
      if(localStorage.length > 0){return true;}
      else{return false;}
    }
  }
};
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

  .link-nav{
    color: white;
    text-decoration: none;
    margin-left: 10px;
    margin-right: 10px;
    margin: auto;
    // font-size: 18px;
  }
</style>
