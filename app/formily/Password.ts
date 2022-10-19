import { connect, mapProps, h } from '@formily/vue';
import { defineComponent } from 'vue-demi';

let password = defineComponent({
  name: 'FormilyPassword',
  props: {},
  setup(customProps: any, { attrs, slots, listeners }) {
    return () => {
      return h(
        'TextField',
        {
          attrs: {
            ...attrs,
            secure: true
          },
          on: listeners,
        },
        slots
      );
    };
  },
});

const Password = connect(password);



export default Password;
