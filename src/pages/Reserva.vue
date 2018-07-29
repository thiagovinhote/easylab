<template>
  <div class="container">
    <div class="content">
      <!-- <form>
        <c-input label="Dia" />
        <c-input label="Turno" />
        <c-input label="Tempo" />
      </form> -->
      <c-button name="Buscar Laboratórios" class="btn-form" @click.native="clickReservar()" />
      <h1 class="main-title-reservas">Minhas reservas cheias</h1>
    </div>
    <div class="content">
      <!-- <card-lab v-for="reserva in reservas" :key="reserva.id" :nome="reserva.nome" :lab="reserva.lab" :dia="reserva.dia" :time="reserva.time"  /> -->
      <card-lab v-for="reserva in reservas" :key="reserva.id"  :lab="reserva.laboratory.name" :dia="reserva.data" />
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
    console.log("Pegou o token do storage:" + localStorage.token);
    const response = await api.get('/reservation/', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
      }
    });
    const { result } = response.data;
    this.reservas = response.data.reservations;
    console.log(response.data);
  },
 data() {
    return {
      reservas : [],
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
