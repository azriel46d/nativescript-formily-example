import { isVoidField } from "@formily/core";
import { connect, mapProps } from "@formily/vue";
import FormBaseItem from "@/component/FormItem/FormItemView.vue";

const Item = connect(
  FormBaseItem,
  mapProps(
    { validateStatus: true, title: "label", required: true },
    (props, field) => {
        console.log('llalal')
      if (isVoidField(field)) return props;
      if (!field) return props;
      const takeMessage = () => {
        if (field.validating) return;
        if (props.feedbackText) return props.feedbackText;
        if (field.selfErrors.length) return field.selfErrors;
        if (field.selfWarnings.length) return field.selfWarnings;
        if (field.selfSuccesses.length) return field.selfSuccesses;
      };
      const errorMessages = takeMessage();
      return {
        feedbackText: Array.isArray(errorMessages)
          ? errorMessages.join(", ")
          : errorMessages,
        extra: props.extra || field.description,
      };
    },
    (props, field) => {
      if (isVoidField(field)) return props;
      if (!field) return props;
      return {
        feedbackStatus:
          field.validateStatus === "validating"
            ? "pending"
            : (Array.isArray(field.decorator) &&
                field.decorator[1]?.feedbackStatus) ||
              field.validateStatus,
      };
    },
    (props, field) => {
      if (isVoidField(field)) return props;
        
      if (!field) return props;
      let asterisk = false;
      if (field.required && field.pattern !== "readPretty") {
        asterisk = true;
      }
      if ("asterisk" in props) {
        asterisk = props.asterisk;
      }
      return {
        asterisk,
      };
    }
  )
);

export const FormItem = Object.assign(Item, {
  BaseItem: FormBaseItem,
});

export default FormItem;
