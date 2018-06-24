<template>
  <div class="form-group" :class="classes">
    <label for="first-name" class="form-label">{{ label }}</label>
    <input v-model="model" @change="change()" type="text" @focus="focus()" @blur="blur()" class="form-control">
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },

  data() {
    return {
      model: '',
      classes: {},
    };
  },

  methods: {
    change() {
      this.$emit('input', this.model);
    },
    focus() {
      this.classes = {'is-active': true, 'is-completed': true};
    },
    blur() {
      if (this.model === '') {
        this.classes = {'is-active': false, 'is-completed': false};
      }
    },
  },
};
</script>

<style lang='scss' scoped>
  $color-darkblue: darkblue;
  $color-blue: lightblue;

  .form-label {
    display: block;
    font-size: 16px;
    transform: translateY(25px);
    color: $color-darkblue;
    transition: all 0.5s;
    // height: 15px;
  }

  .form-control {
    position: relative;
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    padding: 8px 0;
    font-size: 14px;
    color: $color-darkblue;
  }

  .form-group {
    margin: 15px 0;
    position: relative;

    &:first-child {
      margin-top: 0;
    }
  }

  .form-group:after, .form-group:before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 1px;
    background-color: $color-darkblue; 
    bottom: 0;
    left: 0;
    transition: all 0.5s;
  }

  .form-group::after {
    background-color: $color-blue;
    transform: scaleX(0);
  }

  .is-active::after {
    transform: scaleX(1);
  }

  .is-active .form-label {
    color: $color-blue;
  }

  .is-completed .form-label {
    // font-size: 12px;
    transform: translateY(0);
  }
</style>
