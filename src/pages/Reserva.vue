<template>
  <div class="container">
    <div class="content">
      <!-- <form>
        <c-input label="Dia" />
        <c-input label="Turno" />
        <c-input label="Tempo" />
      </form> -->
      <c-button name="Buscar Laboratórios" class="btn-form" @click.native="clickReservar()" />
      <h1 class="main-title-reservas">Minhas reservas</h1>
    </div>
    <div class="content">
      <!-- <card-lab v-for="reserva in reservas" :key="reserva.id" :nome="reserva.nome" :lab="reserva.lab" :dia="reserva.dia" :time="reserva.time"  /> -->
      <card-lab v-for="reserva in reservas" :key="reserva.id"  :lab="reserva.laboratory" :dia="reserva.data" />
    </div>
  </div>
</template>

<script>
import api from '../services/api';
import CardLab from '../components/CardLab';

export default {
  components: {
    CardLab,
  },

  async mounted(){
    const response = await api.get('/reservation/');
    const { result } = response.data;
    this.reservas = response.data.reservations;
    console.log(response);
  },

  // async mounted() {
  //   const response = await api.get('/projects/');
  //   const { results } = response.data;
  //   this.projects = results;
  // },


//cossum api from https://gitar.com/davidcsm/reservas


  data() {
    return {
      reservas : [
          // {nome: 'Programação WEB', lab: 'Laboratório E4', dia: 'Seg', time: '18:00'},
          // {nome: 'Projeto de Sistemas', lab: 'Laboratório E4', dia: 'Ter', time: '08:00'},
          // {nome: 'Redes de Computadores', lab: 'Laboratório E3', dia: 'Qua', time: '16:30'},
          // {nome: 'Lógica de Programação', lab: 'Laboratório E1', dia: 'Qua', time: '20:30'},
          // {nome: 'Laboratório de Programação', lab: 'Laboratório E12', dia: 'Ter', time: '18:00'},
          // {nome: 'Estruturas de Dados 1', lab: 'Laboratório E8', dia: 'Sex', time: '20:30'}
      ],
    };
  },

  methods: {
    clickReservar() {
      console.log('clickReservar');
      this.$router.push({ name: 'NotFound' });
    },
  },
};
</script>

<style lang='scss' scoped>
  .container {
    background-color: #242c31;
  }


  h1.main-title-reservas{
    color: white;
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    max-width: 400px;
    margin: 0 auto;
  }

  form {
    margin: 10px 0;
  }

  .btn-form {
    margin-top: 50px;
  }
</style>
