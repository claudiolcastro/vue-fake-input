import { shallowMount } from '@vue/test-utils';
import VueFakeInput from '@/components/VueFakeInput.vue';

describe('VueFakeInput.vue', () => {
  it('renders vue-fake-input with correct number of inputs', () => {
    const wrapper = shallowMount(VueFakeInput, {
      propsData: {
        length: 3,
      },
    });

    expect(wrapper.findAll('input').length).toBe(3);
  });
});
