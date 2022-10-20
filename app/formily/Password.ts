import { connect, mapProps, h } from "@formily/vue";
import { defineComponent } from "vue-demi";
import { transformComponent } from "~/common/transformComponent";

let password = defineComponent({
  name: "FormilyPassword",
  props: {},
  setup(customProps: any, { attrs, slots, listeners, emit }) {
    return () => {
      return h(
        "TextField",
        {
          attrs: {
            ...attrs,
            secure: true,
          },
          on: {
            ...listeners,
            textChange(e) {
              emit("input", e.value);
            },
          },
        },
        slots
      );
    };
  },
});

const TransformElPwd = transformComponent(password, {
  change: 'input',
})
const Password = connect(TransformElPwd, mapProps({value: 'text'}));

export default Password;
