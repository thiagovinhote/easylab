<template>
  <div class="container">
    <div class="content">
      <div class="left">
        <h1 class="title">Page not found :(</h1>
        <span class="subtitle">Error code: 404</span>
        <router-link to="/" class="btn">Me leve para home</router-link>
      </div>
      <div class="right">
        <img src="../assets/img/enveriment.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 160px;

    @include mobile {
      margin-top: 20px;
      flex-direction: column-reverse;
    }

    div.left {
      padding-top: 30px;
      margin: 0 auto;

      h1.title {
        margin: 10px 0;
        @include font-size(30px, 50px);
        font-weight: 900;
        color: $color-darked;
      }
      span.subtitle {
        display: block;
        @include font-size(14px, 18px);
        color: $color-grey;
      }

      a.btn {
        margin-top: 40px;
        display: block;
        padding: 13px 0;
        background-color: $color-red;
        text-align: center;
        color: $color-white;
        text-decoration: none;
        text-transform: uppercase;
        max-width: 282px;
        border: 2px solid transparent;
        font-weight: bold;
        font-size: 20px;
        outline: none;
        transition: all 100ms ease-in-out;

        @include mobile {
          font-size: 16px;
        }

        &:hover {
          border: 2px dashed $color-darked;
        }

        &:active {
          transform: translateY(5px);          
        }
      }
    }
    div.right {
      margin: 0 auto;

      img {
        height: 250px;

        @include mobile {
          width: 246px;
        }
      }

      #svg {
        #tela,
        #coding-letter {
          transition: all 0.2s ease-in-out;
        }

        &:hover {
          #tela {
            fill: #EA6148;
          }

          #coding-letter {
            fill: #38454F;
          }
        }
      }
    }
  }
</style>
