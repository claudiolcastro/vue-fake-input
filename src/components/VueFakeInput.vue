<template>
  <div class="fk-input-container">
    <input
      :id="generateInputId(index)"
      :ref="generateInputId(index)"
      type="text"
      maxlength="1"
      :style="{
        fontSize: fkFontSize,
        borderBottom: fkInputColor(index),
        color: fontColor,
        width: fkWidth,
      }"
      v-model="inputValues[index]"
      @keyup="handleInputFocus(index)"
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
      default: 22,
      required: false,
    },
    inputColor: {
      type: String,
      default: '#42b983',
      required: false,
    },
    fontColor: {
      type: String,
      default: '#444444',
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
      return `${this.fontSize}px`;
    },

    fkWidth() {
      const width = this.fontSize + 8;

      return `${width}px`;
    },
  },

  methods: {
    generateInputId(index) {
      return `fk_${index + 1}`;
    },

    fkInputColor(index) {
      const color = this.inputValues[index] ? this.inputColor : '#eeeeee';

      return `3px solid ${color}`;
    },

    handleInputFocus(index) {
      if (this.inputValues[index] && this.inputValues[index] !== '' && index < this.length - 1) {
        const [nextInput] = this.$refs[`fk_${index + 2}`];
        nextInput.focus();

      } else if (index > 0 && this.inputValues[index] === '') {
        const [previusInput] = this.$refs[`fk_${index}`];
        previusInput.focus();
      }
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
