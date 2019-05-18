<template>
  <div id="app">
    <vue-fake-input
      :length="5"
      :fontSize="40"
      v-model="fkValue"
    />
    <h2>Value: {{fkValue}}</h2>
  </div>
</template>

<script>
import VueFakeInput from './components/VueFakeInput.vue';

export default {
  name: 'app',
  components: {
    VueFakeInput,
  },
  data() {
    return {
      fkValue: '',
    };
  }
};
</script>
