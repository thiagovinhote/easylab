<template>
  <div class="container">
    <div class="content">
      <h1>Reserva</h1>
      <form>
        <c-input label="Dia" />
        <c-input label="Turno" />
        <c-input label="Tempo" />
      </form>
      <c-button name="Buscar Laboratórios" class="btn-form" @click.native="clickReservar()" />
    </div>
    <div class="content">
      <card-lab name="Laboratório E4" />
      <card-lab name="Laboratório E4" />
    </div>
  </div>
</template>

<script>
import CardLab from '../components/CardLab';

export default {
  components: {
    CardLab,
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
