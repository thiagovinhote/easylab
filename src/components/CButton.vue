<template>
  <button class="btn">
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang='scss' scoped>
  $color-white: #FFFFFF;
  $color-blue: blue;

  .btn {
    display: block;
    padding: 13px 0;
    background-color: $color-red;
    text-align: center;
    color: $color-white;
    text-decoration: none;
    text-transform: uppercase;
    border: 2px solid transparent;
    font-weight: bold;
    font-size: 20px;
    outline: none;
    transition: all 100ms ease-in-out;
    cursor: pointer;

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
</style>
