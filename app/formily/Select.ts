import { connect, h, mapProps } from "@formily/vue";
import { computed, defineComponent, ref, watch } from "vue-demi";
import Vue from "nativescript-vue";
import BottomSheetView from "~/component/BottomSheet/BottomSheetView.vue";
import { OpenRootLayout, CloseRootLayout } from "~/component/OpenRootLayout";
import { transformComponent } from "~/common/transformComponent";

let input = defineComponent({
  name: "FormilySelect",
  props: {},
  setup(customProps: any, { attrs, slots, listeners = {}, emit }) {
    let SelectState = ref({
      value: attrs?.value,
    });
    let textFieldState = ref({
      value: attrs?.value,
    });
    let textFieldText = computed(() => {
      return (
        attrs?.dataSource?.find((item) => item.value === textFieldState.value)
          ?.label || ""
      );
    });
    watch(
      () => textFieldState.value,
      () => emit("input", textFieldState.value)
    );

    return () => {
      let TextField = h(
        "Label",
        {
          attrs: {
            text: textFieldText.value,
            class: "py-4 border-b-2 w-full border-gray-900 ",
          },
          on: {
            ...listeners,
            onTap() {
              const view = new Vue({
                render: (h) => {
                  let Select = h("ListPicker", {
                    attrs: {
                      ...attrs,
                      //@ts-ignore
                      items: attrs.dataSource?.map((item) => item.label),
                      //@ts-ignore
                      selectedIndex: attrs.dataSource?.findIndex(
                        (item) => item.value === textFieldState.value
                      ),
                    },
                    on: {
                      //@ts-ignore
                      selectedIndexChange(e) {
                        SelectState.value = attrs?.dataSource[e.value]?.value;
                      },
                    },
                  });

                  let pickerView = h(
                    BottomSheetView,
                    {
                      props: {
                        text: attrs.title,
                      },
                    },
                    [
                      h("StackLayout", { class: "w-full" }, [
                        Select,
                        h("Button", {
                          attrs: {
                            text: "Select Value",
                            class: "bg-sky-600 text-white rounded mt-auto",
                          },
                          on: {
                            onTap() {
                              textFieldState.value = SelectState.value;
                              CloseRootLayout(view);
                            },
                          },
                        }),
                      ]),
                    ]
                  );
                  return pickerView;
                },
              }).$mount().nativeView;

              OpenRootLayout(view);
            },
          },
          secure: true,
        },
        slots
      );
      return TextField;
    };
  },
});

const Select = connect(
  transformComponent(input, { change: "input" }),
  mapProps({ dataSource: true })
);

export default Select;
