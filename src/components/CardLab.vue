<template>
  <article>
    <h3>{{ name }}</h3>
  </article>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },

  created() {

  },
  
  mounted() {

  },

  methods: {
    acao () {

    },
  },

  computed: {
    validar () {
      return true;
    },
  },
};
</script>

<style lang='scss' scoped>
  $color-blue: blue;
  $color-grey: lightgrey;

  article {
    padding: 10px;
    border: 1px solid transparent;
    border-radius: 10px;
    box-shadow: 0 0 2px $color-blue;
    margin: 6px 0;

    &:first-child {
      margin-top: 0;
    }

    h3 {
      text-align: center;
      margin: 0;
      font-size: 18px;
    }

    &:hover {
      box-shadow: 0 0 5px $color-blue;
      background-color: $color-grey;
      color: $color-blue;
    }
  }
</style>
