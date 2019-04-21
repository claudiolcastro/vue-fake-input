import { shallowMount } from '@vue/test-utils';
import VueFakeInput from '@/components/VueFakeInput.vue';

describe('VueFakeInput.vue', () => {
  it('renders VueFakeInput with correct number of inputs', () => {
    const wrapper = shallowMount(VueFakeInput, {
      propsData: {
        length: 3,
      },
    });

    expect(wrapper.findAll('input').length).toBe(3);
  });

  it('renders VueFakeInput with correct style values', () => {
    const wrapper = shallowMount(VueFakeInput, {
      propsData: {
        length: 3,
        fontSize: 33,
        inputColor: 'red',
        fontColor: 'green',
      },
    });

    const style = 'font-size: 33px; border-bottom: 3px solid red; color: green; width: 41px;';
    expect(wrapper.find('#fk-1').attributes().style).toBe(style);
  });
});
