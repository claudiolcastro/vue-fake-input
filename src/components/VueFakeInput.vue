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
      @keydown="handleKeydown"
      @keyup="handleInputFocus(index)"
      @paste.prevent="handlePastedValues"
      @input="returnFullString()"
      contenteditable="true"
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
    allowPaste: {
      type: Boolean,
      default: true,
      required: false,
    },
    onlyNumber: {
      type: Boolean,
      default: false,
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
    handleKeydown(event) {
      if (!this.onlyNumber) {
        return;
      }
      const key = event.charCode || event.keyCode || 0;
      if (
        !(
          key === 8
          || key === 46
          || key === 86
          || key === 91
          || (key >= 48 && key <= 57)
          || (key >= 96 && key <= 105)
        )
      ) {
        event.preventDefault();
      }
    },

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
      } else if (index > 0 && (!this.inputValues[index] || this.inputValues[index] === '')) {
        const [previusInput] = this.$refs[`fk_${index}`];
        previusInput.focus();
      }
    },

    handlePastedValues(event) {
      if (this.allowPaste) {
        const pastedValue = event.clipboardData.getData('text/plain');
        const splitValues = pastedValue.split('');
        let canPaste = true;

        if (this.onlyNumber) {
          const regx = new RegExp(`^\\d{${this.length}}$`);
          canPaste = regx.test(pastedValue);
        }

        if (canPaste) {
          for (let i = 0; i < this.length; i++) {
            this.updateInputValue(i, splitValues[i]);
          }

          const [lastInput] = this.$refs[`fk_${this.length}`];
          lastInput.focus();

          this.returnFullString();
        }
      }
    },

    updateInputValue(index, value) {
      this.$set(this.inputValues, index, value);
    },

    returnFullString() {
      this.$emit('input', this.inputValues.join(''));
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
