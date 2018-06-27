<template>
  <form>
    <div class="form-group">
      <input type="email" class="form-control" placeholder="E-mail">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" placeholder="Senha">
    </div>
    <button type="button" class="btn">Login</button>
    <div class="group-btn">
      <router-link to="/cadastro" class="btn-link">Cadastrar</router-link>
      <router-link to="/recupera-senha" class="btn-link">Esqueci minha senha</router-link>
    </div>
  </form>
</template>

<script>
export default {};
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
    justify-content: space-between;
    padding: 0 10px;
  }
</style>
