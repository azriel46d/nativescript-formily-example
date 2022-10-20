import { connect, mapProps, h } from "@formily/vue";
import { defineComponent } from "vue-demi";
import { transformComponent } from "~/common/transformComponent";

let input = defineComponent({
  name: "FormilySwitch",
  props: {},
  setup(customProps: any, { attrs, slots, listeners, emit }) {
    return () => {
      return h(
        "Switch",
        {
          attrs,
          on: {
            ...listeners,
            checkedChange(e) {
              emit("input", e.value);
            },
          },
        },
        slots
      );
    };
  },
});

const Switch = connect(
  transformComponent(input, { change: "input" }),
  mapProps({ value: "checked" })
);

export default Switch;
