<template>
  <form>
    <div class="form-group">
      <input type="text" placeholder="Nome" class="form-control">
    </div>
    <hr/>
    <div class="form-group">
      <input type="email" placeholder="E-mail" class="form-control">
    </div>
    <div class="form-group">
      <input type="password" placeholder="Senha" class="form-control">
    </div>
    <button type="button" class="btn">Cadastrar</button>
    <div class="group-btn">
      <router-link to="/login" class="btn-link">Fazer login</router-link>
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
  }

  div.group-btn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 10px;
  }

  hr {
    background-color: rgba(#9BA7A5, 0.6);
  }
</style>
