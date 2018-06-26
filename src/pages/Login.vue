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

      div.form-group {
        margin: 30px 0;

        input.form-control {
          // border: 1px solid #9BA7A5;
          border: 2px solid #5B666B;
          min-height: 55px;
          width: 100%;
          background: transparent;
          padding: 0 15px;
          border-radius: 5px;
          outline: none;
          transition: all 200ms ease-in-out;
          color: #F6F8F7;
          @include font-size(18px, 20px);

          @include mobile {
            min-height: 45px;
          }

          &:focus {
            border: 2px solid #6ED9A0;
            box-shadow: 0 0 6px #6ED9A0;
          }
        }

        &.has-error {
          .form-control {
            border: 2px solid $color-red !important;
            
            &:focus {
              box-shadow: 0 0 6px $color-red;
            }
          }
        }

        &.has-warning {
          .form-control {
            border: 2px solid orange !important;
            
            &:focus {
              box-shadow: 0 0 6px orange;
            }
          }
        }
      }

      button.btn {
        margin: 40px 0 15px 0;

        @include mobile {
          margin: 20px 0 15px 0;
        }

        background-color: #6ED9A0;
        width: 100%;
        min-height: 55px;
        color: #F6F8F7;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
        text-transform: uppercase;
        @include font-size(18px, 20px);
        letter-spacing: 1.2px;
        font-weight: 700;
        transition: all 200ms ease-in-out;

        @include mobile {
          min-height: 45px;
        }

        &:hover,
        &:focus {
          box-shadow: 0 0 6px #6ED9A0;
        }

        &:active {
          transform: translateY(5px);
        }
      }

      div.group-btn {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 10px;

        .btn-link {
          color: #5B666B;
          text-decoration: none;
          @include font-size(14px, 16px);
          min-height: 20px;
          transition: all 200ms ease-in-out;
          outline: none;

          &:hover,
          &:focus {
            color: #F6F8F7;
            text-shadow: 0 0 0.5px #F6F8F7;
          }
        }
      }
    }
  }
</style>
