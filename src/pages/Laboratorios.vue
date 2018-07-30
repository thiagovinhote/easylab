<template>
  <div class="container-conteudo">
    <h2 class="page-title">Lista de Laboratórios</h2>
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
    <div class="container-comentario">
      <label for="observacao" style="color: white;">Observações</label>
      <input v-model="textObservacao" placeholder="Adicione aqui observações sobre a reserva de um laboratório" class="observacao-container">
    </div>
    <div class="container-button">
      <button type="button" class="btn-reservar" v-on:click="reservar" v-show="estaSelecionado">Reservar</button>
    </div>

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
      textObservacao : '',
      estaSelecionado :false
    };
  },
  methods: {
    select(id) {
      this.idSelecionado = id;
      this.estaSelecionado = true;
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
.container-conteudo {
  /* background-color: #242c31; */
  height: 100%;
  /* widows: 100%; */
  min-width: 350px;
  /* border-bottom: 5px solid orangered; */
  margin-bottom: 0px;
}

.observacao-container{
    border: 1px solid black;
    width: 100%;
    height: 70px;
    /* margin: 8px; */
    padding: 8px;
    margin-top: 10px;
    min-width: 350px;
}

.container-comentario{
  width: 100%;
  /* background-color: gold; */
  padding: 8px;
}

.container-button {
  width: 100%;
  padding: 8px;
  /* border: 1px solid green; */
  position: absolute;
  bottom: 0;
}

.btn-reservar{
  width: 100%;
  background-color: #52a5ff;
  color: white;
  border-radius: 5px;
  min-height: 55px;
}

.page-title {
  color: white;
  margin: 8px;
}

.alert {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    color: orange;
}


</style>



