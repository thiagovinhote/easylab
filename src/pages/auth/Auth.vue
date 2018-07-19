<template>
  <div class="hero">
    <div class="container">
      <div class="left">
        <img class="brand" src="../../assets/img/default.jpg" alt="Logo EasyLab">
      </div>
      <div class="right">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='scss' scoped>
  .hero {
    height: 100%;
    background-color: #242c31;
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
        // height: auto;
        object-fit: contain;
        height: 100%;
        width: 100%;
      }
    }

    .right {
      position: relative;

      &:after {
        content: '';
        background-color: rgba(91, 102, 107, 0.5);
        border-radius: 2px;
        width: 1px;
        height: 400px;
        position: absolute;
        left: -30px;
        top: 0;
        bottom: 0;
        margin: auto;

        @include mobile {
          width: 100%;
          height: 1px;
          left: 0;
          top: 15px;
        }
      }
    }
  }
</style>
