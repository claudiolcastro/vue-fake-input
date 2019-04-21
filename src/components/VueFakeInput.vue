<template>
  <div class="fk-input-container">
    <input
      :id="generateInputId(index)"
      type="text"
      maxlength="1"
      :style="{
        fontSize: fkFontSize,
        borderBottom: fkBorderColor,
        color: fkFontColor,
        width: fkWidth,
      }"
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

  computed: {
    fkFontSize() {
      return this.fontSize ? `${this.fontSize}px` : '22px';
    },

    fkBorderColor() {
      const color = this.inputColor ? this.inputColor : '#42b983';
      return `3px solid ${color}`;
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
      return `fk-${index}`;
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
