import { connect, h } from "@formily/vue";
import { computed, defineComponent, ref, watch } from "vue-demi";
import Vue from "nativescript-vue";
import BottomSheetView from "~/component/BottomSheet/BottomSheetView.vue";
import { OpenRootLayout, CloseRootLayout } from "~/component/OpenRootLayout";
import { format } from "date-fns";
import { transformComponent } from "~/common/transformComponent";


let input = defineComponent({
  name: "FormilyDatePicker",
  props: {},
  setup(customProps: any, { attrs, slots, listeners = {}, emit }) {
    let datePickerState = ref({
      date: attrs.value,
    });
    let textFieldState = ref({
      date: attrs.value,
    });
    let textFieldText = computed(() => {
      if (textFieldState.value.date) {
        try {
          let d = new Date(textFieldState.value.date);
          return `🗓 ${format(d, "dd-MMM-yyyy")}`;
        } catch (e) {
          return "🗓";
        }
      } else {
        return "🗓";
      }
    });
    watch(
      () => textFieldState.value.date,
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
                      date: datePickerState.value.date,
                    },
                    on: {
                      //@ts-ignore
                      dateChange(e) {
                        datePickerState.value.date = e.object.date;
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
                        DatePicker,
                        h("Button", {
                          attrs: {
                            text: "Select Value",
                            class: "bg-sky-600 text-white rounded mt-auto",
                          },
                          on: {
                            onTap() {
                              try {
                                textFieldState.value.date = new Date(
                                  datePickerState.value.date
                                );
                              } catch (e) {
                                console.log(e);
                              }
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

const DatePicker = connect(transformComponent(input, { change: "input" }));

export default DatePicker;
