<template>
  <form>
    <div class="form-group">
      <label for="email" class="form-label">Digite seu endereço de e-mail</label>
      <input name="email" type="email" class="form-control" placeholder="E-mail">
    </div>
    <button type="button" class="btn">Recuperar Senha</button>
    <div class="group-btn">
      <router-link to="/login" class="btn-link">Fazer login</router-link>
      <router-link to="/cadastro" class="btn-link">Cadastrar</router-link>
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
</style>
