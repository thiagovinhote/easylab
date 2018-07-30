<template>
  <div class="container">
    <h1>Lista de Laboratórios</h1>
    <lab-item
      v-for="lab in labs"
      :key="lab.id"
      :name="lab.name"
      :isSelected="isSelected(lab._id)"
      @click.native="select(lab._id)"
    />
    <observacao></observacao>
    <button type="button" class="btn" v-on:click="reservar">Reservar</button>

    <!-- <button v-on:click="warn('Form cannot be submitted yet.', $event)">Enviar</button> -->
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
      idSelecionado: "",
      labs: [],
      isActive: false
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
        
        api.post('/administration/', {"laboratory" : self.idSelecionado}, {headers : {Authorization: `Bearer ${localStorage.token}`}}
        ).then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
};
</script>
    
<style>
</style>



