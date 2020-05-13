import { shallowMount } from '@vue/test-utils';
import VueFakeInput from '@/components/VueFakeInput.vue';

describe('VueFakeInput.vue', () => {
  it('renders VueFakeInput with correct number of inputs and default values', () => {
    const wrapper = shallowMount(VueFakeInput, {
      propsData: {
        length: 3,
      },
    });

    expect(wrapper.findAll('input').length).toBe(3);

    const style = 'font-size: 22px; border-bottom: 3px solid #eeeeee; color: rgb(68, 68, 68); width: 30px;';
    expect(wrapper.find('#fk_1').attributes().style).toBe(style);
  });

  it('renders VueFakeInput with props passed', () => {
    const wrapper = shallowMount(VueFakeInput, {
      propsData: {
        length: 3,
        fontSize: 33,
        inputColor: 'red',
        fontColor: 'green',
      },
    });

    const style = 'font-size: 33px; border-bottom: 3px solid #eeeeee; color: green; width: 41px;';
    expect(wrapper.find('#fk_1').attributes().style).toBe(style);
  });

  it('change the color of filled inputs', () => {
    const wrapper = shallowMount(VueFakeInput, {
      propsData: {
        length: 3,
        inputColor: 'red',
      },
    });

    wrapper.setData({ inputValues: ['b', '3'] });

    expect(wrapper.find('#fk_1').element.style.borderBottom).toBe('3px solid red');
    expect(wrapper.find('#fk_3').element.style.borderBottom).toBe('3px solid #eeeeee');
  });

  it('call handleInputFocus on keyup event', () => {
    const methods = {
      handleInputFocus: jest.fn(),
    };

    const wrapper = shallowMount(VueFakeInput, {
      propsData: {
        length: 3,
      },
      methods,
      attachToDocument: true,
    });

    wrapper.find('input#fk_1').trigger('keyup', {
      key: 'a',
    });

    expect(methods.handleInputFocus).toHaveBeenCalledWith(0);
  });

  it('call handleKeydown on keydown event', () => {
    const methods = {
      handleKeydown: jest.fn(),
    };

    const wrapper = shallowMount(VueFakeInput, {
      propsData: {
        length: 3,
      },
      methods,
      attachToDocument: true,
    });

    wrapper.find('input#fk_1').trigger('keydown', {
      key: '1',
    });

    expect(methods.handleKeydown).toHaveBeenCalled();
  });
});
