import { connect, mapProps, h } from '@formily/vue';
import { defineComponent } from 'vue-demi';

let input = defineComponent({
  name: 'FormilySwitch',
  props: {},
  setup(customProps: any, { attrs, slots, listeners }) {
    return () => {
      return h(
        'Switch',
        {
          attrs,
          on: listeners,
          secure: true
        },
        slots
      );
    };
  },
});

const Switch = connect(input);


export default Switch;
