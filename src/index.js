import VueFakeInput from './components/VueFakeInput.vue';

const install = Vue => Vue.component(VueFakeInput.name, VueFakeInput);

if (typeof window !== 'undefined' && window.Vue) {
  window.VueFakeInput = VueFakeInput;
  window.Vue.use(VueFakeInput);
}

VueFakeInput.install = install;

export default VueFakeInput;
export { VueFakeInput };
