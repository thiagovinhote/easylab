<template>
  <div class="card-container">
    <div class="description">
      <h2 class="disciplina">{{nome}}</h2>
      <h2 class="laboratorio">{{lab}}</h2>
    </div>
    <div class="detail">
      <h2 class="dia">{{dia}}</h2>
      <h2 class="time">{{time}}</h2>
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

  $color-fundo: #242c31;
  $color-blue-button: #52a5ff;
  $color-text-field: #566572;
  $color-tab-bar: #1b2125;
  

  div.card-container{
    background-color: #1b2125;
    display: flex;
    justify-content: space-between;
    margin: 8px;
    // border: 1px solid #EAEAEA;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-left: 5px solid $color-blue-button;
  }

  div.description{
    padding: 8px;

  }

  div.detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    // background-color: #13CAE2;
    color: white;
    padding: 8px;
    border-radius: 0px 6px 6px 0px;
  }

  div.detail > h2.time {
    text-align: center; 
    font-size: 20px;

  }

  div.detail > h2.dia {
    text-align: center; 
    font-size: 18px;
  }

  h2.disciplina{
    color: #ffffff;
    font-size: 20px;
  }

  .laboratorio{
    margin-top: 3px;
    color: #566572;
    font-size: 18px;
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
