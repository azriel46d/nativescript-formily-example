import { connect, mapProps, h } from '@formily/vue';
import { defineComponent } from 'vue-demi';

let input = defineComponent({
  name: 'FormilyDatePicker',
  props: {},
  setup(customProps: any, { attrs, slots, listeners }) {
    return () => {
      return h(
        'DatePicker',
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

const DatePicker = connect(input);


export default DatePicker;
