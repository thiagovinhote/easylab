<template v-on:click="select('Form cannot be submitted yet.', $event)">
    <div class="container">
        <h3 class="name-lab">{{name}}</h3>
    </div>
</template>

<script>
export default {
    props : {
        name : {
            type: String,
            required: true,
        }
    },
    methods : {
        select: function (message, event) {
            // agora temos acesso ao evento nativo
            // if (event) event.preventDefault()
            // alert(message)
            console.log(event);
        }
    }
}
</script>

<style scoped>
    .container {
        border: 1px solid black;
        margin: 8px;
        padding: 10px;
    }
</style>