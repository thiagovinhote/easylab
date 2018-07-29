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
    <button v-on:click="warn('Form cannot be submitted yet.', $event)">Enviar</button>
  </div>
</template>
<script>
import api from "../services/api";
import LabItem from "../components/LabItem";

export default {
  components: {
    LabItem
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
  },
};
</script>
    
<style>
</style>



