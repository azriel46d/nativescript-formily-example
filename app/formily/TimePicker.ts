import { connect, mapProps, h } from '@formily/vue';
import { defineComponent } from 'vue-demi';

let input = defineComponent({
  name: 'FormilyTimePicker',
  props: {},
  setup(customProps: any, { attrs, slots, listeners }) {
    return () => {
      return h(
        'TimePicker',
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

const TimePicker = connect(input);


export default TimePicker;
