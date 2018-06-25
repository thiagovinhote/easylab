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
  $color-darked: #464646;
  $color-red: #ed2c39;
  $color-grey: #9b9b9b;
  $color-white: #FFFFFF;

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 160px;

    div.left {
      padding-top: 30px;
      h1.title {
        margin: 10px 0;
        font-size: 50px;
        font-weight: 900;
        color: $color-darked;
      }
      span.subtitle {
        display: block;
        font-size: 18px;
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

        &:hover {
          border: 2px dashed $color-darked;
        }

        &:active {
          transform: translateY(5px);          
        }
      }
    }
    div.right {
      img {
        height: 250px;
      }
    }
  }
</style>
