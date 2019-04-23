<template>
  <div class="fk-input-container">
    <input
      :id="generateInputId(index)"
      type="text"
      maxlength="1"
      :style="{
        fontSize: fkFontSize,
        borderBottom: fkInputColor(index),
        color: fkFontColor,
        width: fkWidth,
      }"
      v-model="inputValues[index]"
      :key="index"
      v-for="(input, index) in length"
    />
  </div>
</template>

<script>
export default {
  name: 'vue-fake-input',

  props: {
    length: {
      type: Number,
      required: true,
    },
    fontSize: {
      type: Number,
      required: false,
    },
    inputColor: {
      type: String,
      required: false,
    },
    fontColor: {
      type: String,
      required: false,
    },
  },

  data() {
    return {
      inputValues: [],
    };
  },

  computed: {
    fkFontSize() {
      return this.fontSize ? `${this.fontSize}px` : '22px';
    },

    fkFontColor() {
      const color = this.fontColor ? this.fontColor : '#444444';
      return color;
    },

    fkWidth() {
      const width = this.fontSize ? this.fontSize + 8 : 30;
      return `${width}px`;
    },
  },

  methods: {
    generateInputId(index) {
      return `fk-${index + 1}`;
    },

    fkInputColor(index) {
      const selectedColor = this.inputColor ? this.inputColor : '#42b983';
      const color = this.inputValues[index] ? selectedColor : '#eeeeee';
      return `3px solid ${color}`;
    },
  },
};
</script>

<style lang="scss" scoped>
  .fk-input-container {
    display: inline-block;

    input {
      border: none;
      margin-left: 10px;
      text-align: center;

      &:first-child { margin-left: 0; }
      &:focus { outline: none; }
    }

  }
</style>
