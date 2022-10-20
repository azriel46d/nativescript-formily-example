import { connect, mapProps, h } from "@formily/vue";
import { EventData } from "@nativescript/core";
import { defineComponent } from "vue-demi";
import { transformComponent } from "~/common/transformComponent";

let input = defineComponent({
  name: "FormilyTextField",
  props: {},
  setup(customProps: any, { attrs, slots, listeners, emit }) {
    return () => {
      return h(
        "TextField",
        {
          attrs,
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

const TransformElInput = transformComponent(input, {
  change: 'input',
})

const Input = connect(TransformElInput, mapProps({ value: 'text' }));

const TextArea = connect(
  Input,
  mapProps(
    (props) => {
      return {
        ...props,
        wrapText: true,
      };
    }
  )
);
//@ts-ignore
Input.TextArea = TextArea;

export default Input;
