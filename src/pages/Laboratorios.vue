<template>
  <div class="container">
    <h1>Lista de Laboratórios</h1>
    <!-- Aviso quando não há laboratórios disponíveis -->
    <!-- <h3 class="alert">Não há laboratórios disponíveis para reserva</h3> -->
    <lab-item
      v-for="lab in labs"
      :key="lab.id"
      :name="lab.name"
      v-show="lab.isReserved == false"
      @click.native="select(lab._id)"
      :isSelected="isSelected(lab._id)"
    />

    <input v-model="textObservacao" placeholder="comente algo" class="observacao-container">
    <button type="button" class="btn" v-on:click="reservar">Reservar</button>
  </div>
</template>
<script>
import api from "../services/api";
import LabItem from "../components/LabItem";
import Observacao from "../components/Observacao";

export default {
  components: {
    LabItem,
    Observacao
  },
  async mounted() {
    const response = await api.get("/administration/");
    this.labs = response.data.labs;
    console.log(response);
  },
  data: function() {
    return {
      idSelecionado: null,
      labs: [],
      isActive: false,
      textObservacao : ''
    };
  },
  methods: {
    select(id) {
      this.idSelecionado = id;
      console.log(this.idSelecionado);
    },
    isSelected(id) {
      return this.idSelecionado === id;
    },
    reservar(){
        console.log("Tudo normales com o token:", localStorage.token);
        console.log("Olha o id selecionado:", this.idSelecionado);
        const self = this;
        
        api.post('/reservation/register/', {"laboratory" : this.idSelecionado, "observations" : this.textObservacao}, {headers : {Authorization: `Bearer ${localStorage.token}`}}
        ).then(function (response) {
          console.log(response);
          //se conseguir fazer uma reserva altera o status do laboratório para reservado (isReserved = true)
        })
        .catch(function (error) {
          console.log(error);
        });

        api.patch('/administration/' + this.idSelecionado + '/',  [{"propName": "isReserved", "value": true }], {headers : {Authorization: `Bearer ${localStorage.token}`}}
        ).then(function (response) {
            console.log(response);
        }).catch(function(error){
            console.log(error)
        });
        // [{"propName": "isReserved", "value": true }]
        // console.log(this.textObservacao);
    }
  }
};
</script>
    
<style>
.observacao-container{
    border: 1px solid black;
    width: 100%;
    height: 70px;
    margin-top: 15px;
}

.alert {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    color: orange;
}

</style>



