<template>
  <div class="container-conteudo">
    <div class="content">
      <!-- <form>
        <c-input label="Dia" />
        <c-input label="Turno" />
        <c-input label="Tempo" />
      </form> -->
      <!-- <c-button name="Buscar Laboratórios" class="btn-form" @click.native="clickReservar()" /> -->
      <h2 class="page-title">Reservas realizadas</h2>
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
    <div class="container-button">
      <button type="button" class="btn-deletar" v-on:click="deletar" v-show="estaSelecionado">Deletar</button>
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
      idSelecionado: null,
      estaSelecionado : false,
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
      this.estaSelecionado = true;
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
    border-bottom: 5px solid orangered;
    height: 100%;
  }
  .page-title {
    color: white;
    margin: 8px;
  }
  .content {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    min-width: 350px;
    margin: 0 auto;
  }

  .container-conteudo {
    /* background-color: #242c31; */
    height: 100%;
    /* widows: 100%; */
    min-width: 350px;
    // border-bottom: 5px solid orangered;
    margin-bottom: 0px;
  }


  .container-button{
    width: 100%;
    padding: 8px;
    // border: 1px solid green;
    position: absolute;
    bottom: 0;
  }

  .btn-deletar{
    width: 100%;
    background-color: #52a5ff;
    color: white;
    border-radius: 5px;
    min-height: 55px;
  }

  form {
    margin: 10px 0;
  }

  .btn-form {
    margin-top: 50px;
  }
</style>
