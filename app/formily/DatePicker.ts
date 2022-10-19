import { connect, h } from "@formily/vue";
import { computed, defineComponent, ref, watch } from "vue-demi";
import Vue from "nativescript-vue";
import PickerViewVue from "~/component/popovers/PickerView.vue";
import { OpenRootLayout, CloseRootLayout } from "~/component/OpenRootLayout";
import { format } from 'date-fns'

let input = defineComponent({
  name: "FormilyDatePicker",
  props: {},
  setup(customProps: any, { attrs, slots, listeners = {}, emit }) {
    let datePickerState = ref({
      date: attrs.value,
    });
    let textFieldState = ref({
      date: attrs.value
    });
    let textFieldText = computed(() => {
      console.log(textFieldState)
      if (textFieldState.value.date) {
        let d = new Date(textFieldState.value.date);
        return `🗓 ${format(d, "dd-MMM-yyyy")}`;
      } else {
        return "🗓";
      }
    });
    watch(
      () => textFieldState.value,
      () => emit("input", textFieldState.value.date)
    );
    return () => {
      let TextField = h(
        "Label",
        {
          attrs: {
            // editable: false,
            text: textFieldText.value,
            class: "py-4 border-b-2 w-full border-gray-900 ",
          },
          on: {
            ...listeners,
            onTap() {
              const view = new Vue({
                render: (h) => {
                  let DatePicker = h("DatePicker", {
                    attrs: {
                      ...attrs,
                      date: datePickerState.value.date
                    },
                    on: {
                      //@ts-ignore
                      dateChange(e) {
                        datePickerState.value.date = e.object.date;
                      },
                    },
                  });

                  let pickerView = h(
                    PickerViewVue,
                    {
                      props: {
                        text: attrs.title,
                      },
                    },
                    [
                      h("StackLayout", { class: "w-full" }, [
                        DatePicker,
                        h("Button", {
                          attrs: {
                            text: "Select Value",
                            class: "bg-sky-600 text-white rounded mt-auto",
                          },
                          on: {
                            onTap() {
                              textFieldState.value.date = new Date(datePickerState.value.date)
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

const DatePicker = connect(input);

export default DatePicker;
