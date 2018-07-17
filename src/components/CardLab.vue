<template>
  <div class="card-container">
    <div class="description">
      <h2 class="disciplina">{{nome}}</h2>
      <h2 class="laboratorio">{{lab}}</h2>
    </div>
    <div class="detail">
      <h2>{{dia}}</h2>
      <h2>{{time}}</h2>
    </div>
  </div>
  

</template>

<script>
export default {
  props: {
    nome: {
      type: String,
      required: true,
    },
    lab: {
      type: String,
      required: true,
    },
    dia: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    }
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

  div.card-container{
    background-color: 424242;
    display: flex;
    justify-content: space-between;
    margin: 8px;
    // border: 1px solid #EAEAEA;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  div.description{
    padding: 8px;
  }

  div.detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #13CAE2;
    color: white;
    padding: 8px;
    border-radius: 0px 6px 6px 0px;
  }

  div.detail > h2 {
    text-align: center; 
  }

  h2.disciplina{
    color: #13CAE2;
  }

  .laboratorio{
    margin-top: 3px;
    color: #B5B5B5;
  }

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
