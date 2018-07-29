<template>
    <div class="container">
        <h1>Lista de Laboratórios</h1>
        <lab-item v-for="lab in labs" :key="lab.id" :name="lab.name" v-bind:class="{}" @click="select($event)" ></lab-item>
        <button v-on:click="warn('Form cannot be submitted yet.', $event)">Enviar</button>
    </div>
</template>
<script>
import api from '../services/api';
import LabItem from '../components/LabItem';

export default {
    components : {
        LabItem,
    },
    async mounted(){
        const response  = await api.get('/administration/');
        this.labs  = response.data.labs;
        console.log(response);
    },
    data: function(){
        return {
            idSelecionado : '',
            labs : [],
            isActive : false,
        }
    },
    methods: {
        select: function (event) {
            alert('clicado');
        }
    }
}
</script>
    
<style>
    .selected {
        background-color: #4e4e4e;
    }
    .unselected {
        background-color: white;
    }
</style>



