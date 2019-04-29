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
        color: fkFontColor,
        width: fkWidth,
      }"
      v-model="inputValues[index]"
      @keyup="handleInputFacus(index)"
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

  // mounted() {
  //   const [i] = this.$refs.fk_3;
  //   i.focus();
  // },

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
      return `fk_${index + 1}`;
    },

    fkInputColor(index) {
      const selectedColor = this.inputColor ? this.inputColor : '#42b983';
      const color = this.inputValues[index] ? selectedColor : '#eeeeee';
      return `3px solid ${color}`;
    },

    handleInputFacus(index) {
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
