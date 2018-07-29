<template>
    <div class="container" :class="{'selected': isSelected, 'unselected': !isSelected}">
        <h3 class="name-lab">{{name}}</h3>
    </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    isSelected: {
      type: Boolean
    }
  },
};
</script>

<style scoped>
.container {
  border: 1px solid black;
  margin: 8px;
  padding: 10px;
  cursor: pointer;
}

.selected {
  background-color: #4e4e4e;
}
.unselected {
  background-color: white;
}
</style>