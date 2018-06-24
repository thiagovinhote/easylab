<template>
  <div class="container">
    <div class="content">
      <h1>Reserva</h1>
      <form>
        <c-input label="Dia" />
        <c-input label="Turno" />
        <c-input label="Tempo" />
      </form>
      <c-button name="Reservar" class="btn-form" @click.native="clickReservar()" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    clickReservar() {
      console.log('clickReservar');
      this.$router.push({ name: 'Login' });
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
