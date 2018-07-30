<template>
  <div class="container">
    <div class="content">
      <!-- <form>
        <c-input label="Dia" />
        <c-input label="Turno" />
        <c-input label="Tempo" />
      </form> -->
      <c-button name="Buscar Laboratórios" class="btn-form" @click.native="clickReservar()" />
      <h1 class="main-title-reservas">Minhas reservas realizadas</h1>
    </div>
    <div class="content">
      <!-- <card-lab v-for="reserva in reservas" :key="reserva.id" :nome="reserva.nome" :lab="reserva.lab" :dia="reserva.dia" :time="reserva.time"  /> -->
      <card-lab v-for="reserva in reservas" 
      :key="reserva.id"  
      :lab="reserva.laboratory.name" 
      :dia="reserva.data"
      :isSelected="isSelected(reserva._id)"
      @click.native="select(reserva._id, reserva.laboratory._id, reserva)"
       />
    </div>
    <button type="button" class="btn" v-on:click="deletar">Deletar</button>
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
      idSelecionado: "",
      reservas : [],
      labId: "",
      reservaSelecionada: null,
    };
  },

  methods: {
    clickReservar() {
      console.log('clickReservar');
      this.$router.push({ name: 'NotFound' });
    },
    isSelected(id){
      return this.idSelecionado === id;
    },
    select(id, labId, reserva){
      this.idSelecionado = id;
      this.labId = labId;
      this.reservaSelecionada = reserva;
      console.log("Id reservation: " + this.idSelecionado + " | Id Laboratório: " + this.labId + "| Reserva selecionada +" + this.reservaSelecionada.observations);
    },
    deletar(lab){
      console.log("Cliclou em deletar");
      api.delete('/reservation/' + this.idSelecionado + '/', {headers : {Authorization: `Bearer ${localStorage.token}`}}
        ).then(function (response) {
          console.log(response);
          //Se conseguir deletar a reserva altera o status do laboratório para reservado (isReserved = false)
          //deletou e alterou o status do laboratório para não reservado
          const index = this.reservas.indexOf(this.reservaSelecionada);
          this.reservas.splice(index, 1);
        })
        .catch(function (error) {
          console.log(error);
      });

      api.patch('/administration/' + this.labId + '/',  [{"propName": "isReserved", "value": false }], {headers : {Authorization: `Bearer ${localStorage.token}`}}
        ).then(function (response) {
            console.log(response);
        }).catch(function(error){
            console.log(error)
      });      
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
