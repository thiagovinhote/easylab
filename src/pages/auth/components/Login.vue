<template>
  <form>
    <div class="form-group">
      <input type="email" class="form-control" placeholder="E-mail" v-model="email">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Senha" v-model="password">
    </div>
    <button type="button" class="btn" v-on:click="login">Login</button>
    <div class="group-btn">
      <router-link to="/cadastro" class="btn-link">Cadastrar</router-link>
      <!-- <router-link to="/recupera-senha" class="btn-link">Esqueci minha senha</router-link> -->
    </div>
  </form>
</template>

<script>
  import api from '../../../services/api';
  import Router from 'vue-router';

  export default {
    
    data() {
      return {
        email: "",
        password: "",
      }
    },
    methods : { 
      login() {
        console.log('Cliclou para logar');
        var self = this;  
        api.post('/auth/authenticate', {
          "email" : this.email,
          "password" : this.password
        }).then(function (response) {
          // console.log(response);
          localStorage.setItem("email", response.data.user.email);
          localStorage.setItem("token", response.data.token);
          // self.$router.push('reserva');
          self.$router.push('laboratorios');
        }).catch(function (error){
          console.log(error);
        });
      }
    }
  };
</script>

<style lang='scss' scoped>
  form {
    margin: 0 auto;
    max-width: 350px;
    // @include desktop {
    // }
  }

  div.group-btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0 10px;
  }
</style>
