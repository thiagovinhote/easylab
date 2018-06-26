<template>
  <div class="hero">
    <div class="container">
      <div class="left">
        <img class="brand" src="../assets/img/default.jpg" alt="Logo EasyLab">
      </div>
      <div class="right">
        <form>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="E-mail">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Senha">
          </div>
          <button type="button" class="btn">Login</button>
          <div class="group-btn">
            <a href="javascript::void(0)" class="btn-link">Cadastrar</a>
            <a href="javascript::void(0)" class="btn-link">Esqueci minha senha</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
  .hero {
    height: 100%;
    background-color: #2A363F;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
      display: flex;
      flex-direction: row;
      align-items: center;

      @include mobile {
        flex-direction: column;
        align-items: initial;
      }
    }

    .left,
    .right {
      text-align: center;
      width: 100%;
      @include desktop {
        width: 450px;
        margin: auto;
      }
    }

    .left {
      @include mobile {
        height: 150px;
      }

      img.brand {
        max-width: 250px;
        height: auto;
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    }

    .right {
      position: relative;

      &:after {
        content: '';
        background-color: rgba(#5B666B, 0.5);
        border-radius: 2px;
        width: 1px;
        height: 100%;
        position: absolute;
        left: -30px;
        top: 0;

        @include mobile {
          width: 100%;
          height: 1px;
          left: 0;
          top: 15px;
        }
      }

      margin: 0 15px;

      @include mobile {
        margin: 0 auto;
      }

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
    }
  }
</style>
