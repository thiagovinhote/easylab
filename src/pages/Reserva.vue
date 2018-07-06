<template>
  <div class="container">
    <div class="content">
      <h1>Reserva</h1>
      <!-- <form>
        <c-input label="Dia" />
        <c-input label="Turno" />
        <c-input label="Tempo" />
      </form> -->
      <c-button name="Buscar Laboratórios" class="btn-form" @click.native="clickReservar()" />
    </div>
    <div class="content">
      <card-lab v-for="project in projects" :key="project.id" :name="project.name" />
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

  async mounted() {
    const response = await api.get('/projects/');
    const { results } = response.data;
    this.projects = results;
  },

  data() {
    return {
      projects: [],
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
