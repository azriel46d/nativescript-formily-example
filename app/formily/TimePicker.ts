import { connect, h } from "@formily/vue";
import { computed, defineComponent, ref, watch } from "vue-demi";
import Vue from "nativescript-vue";
import BottomSheetView from "~/component/BottomSheet/BottomSheetView.vue";
import { OpenRootLayout, CloseRootLayout } from "~/component/OpenRootLayout";
import { transformComponent } from "~/common/transformComponent";

let input = defineComponent({
  name: "FormilyTimePicker",
  props: {},
  setup(customProps: any, { attrs, slots, listeners = {}, emit }) {
    let timePickerState = ref({
      hour: attrs?.value?.hour,
      minute: attrs?.value?.minute,
    });
    let textFieldState = ref({
      hour: attrs?.value?.hour,
      minute: attrs?.value?.minute,
    });
    let textFieldText = computed(() => {
      return textFieldState.value.hour
        ? `🕚 ${textFieldState.value.hour || "-"}:${textFieldState.value.minute}`
        : "🕚";
    });
    watch(() => textFieldState.value.hour, () => emit('input', [textFieldState.value.hour,textFieldState.value.minute]))
    watch(() => textFieldState.value.minute, () => emit('input', [textFieldState.value.hour,textFieldState.value.minute]))
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
                  let timePicker = h("TimePicker", {
                    attrs: {
                      ...attrs,
                      hour: timePickerState.value.hour,
                      minute: timePickerState.value.minute
                    },
                    on: {
                      //@ts-ignore
                      timeChange(e) {
                        timePickerState.value.hour = e.object.hour;
                        timePickerState.value.minute = e.object.minute;
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
                        timePicker,
                        h("Button", {
                          attrs: {
                            text: "Select Value",
                            class: "bg-sky-600 text-white rounded mt-auto",
                          },
                          on: {
                            onTap() {
                              textFieldState.value = timePickerState.value;
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

const TimePicker = connect(transformComponent(input, {change: 'input'}));

export default TimePicker;
