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
    background-color: $color-blue;
    padding: 10px;
    font-size: 14px;
    color: $color-white;
    font-weight: 600;
    text-transform: uppercase;
    min-height: 45px;
    min-width: 140px;
    border: 1px solid $color-blue;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    outline: none;
    border-radius: 10px;

    &:hover {
      background-color: $color-white;
      color: $color-blue;
      border: 1px dashed $color-blue;
    }

    &:active {
      transform: translateY(5px);
    }
  }
</style>
