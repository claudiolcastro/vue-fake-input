<template>
  <div id="app">
    <vue-fake-input
      :length="5"
      :fontSize="40"
    />
  </div>
</template>

<script>
import VueFakeInput from './components/VueFakeInput.vue';

export default {
  name: 'app',
  components: {
    VueFakeInput,
  },
};
</script>
