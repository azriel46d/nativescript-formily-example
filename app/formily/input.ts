import { connect, mapProps, h } from '@formily/vue';
import { defineComponent } from 'vue-demi';

let input = defineComponent({
  name: 'FormilyTextField',
  props: {},
  setup(customProps: any, { attrs, slots, listeners }) {
    return () => {
      return h(
        'TextField',
        {
          attrs,
          on: listeners,
        },
        slots
      );
    };
  },
});

const Input = connect(input);

const TextArea = connect(
  Input,
  mapProps((props) => {
    return {
      ...props,
      wrapText: true,
    };
  })
);
//@ts-ignore
Input.TextArea = TextArea;

export default Input;
