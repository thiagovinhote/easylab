<template>
    <div class="container-lab-item" :class="{'selected': isSelected, 'unselected': !isSelected}">
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
.container-lab-item {
  margin: 8px;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border-left: 5px solid #52a5ff;
  color: white;
}

.selected {
  background-color: rgb(33, 62, 116);
}
.unselected {
  background-color: #1b2125;
}
</style>