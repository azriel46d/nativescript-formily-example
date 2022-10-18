<template>
  <StackLayout :class="wrapperClass" :orientation="layout">
    <Label :text="label" :class="labelClass" :textWrap="labelWrap" />
    <GridLayout>
      <slot />
    </GridLayout>
    <Label :text="feedbackText" :class="feedbackClass" />
  </StackLayout>
</template>

<script>
import { defineComponent } from 'vue-demi';
export default defineComponent({
  name: 'FormItem',
  props: {
    className: {},
    required: {},
    label: {
      type: String,
    },
    //colon: {}
    labelStyle: {},
    // labelAlign: {},
    labelWrap: {
      type: Boolean,
      default: false,
    },
    // labelWidth: {},
    // labelCol: {},
    layout: {
      type: String,
      default: 'vertical',
    },
    tooltip: {},
    // wrapperWidth: {},
    // wrapperCol: {},
    // wrapperAlign: {},
    // wrapperWrap: {},
    wrapperStyle: {},
    // fullness: {},
    // addonBefore: {},
    // addonAfter: {},
    size: {},
    extra: {},
    feedbackText: {},
    feedbackLayout: {},
    tooltipLayout: {},
    feedbackStatus: {}, // error/success/warning
    // feedbackIcon: {},
    asterisk: {
      type: Boolean,
      default: false,
    },
    gridSpan: {},
    bordered: { default: true },
    inset: { default: false },
  },
  computed: {
    feedbackClass() {
      switch (this.feedbackStatus) {
        case 'error':
          return 'bg-red-400';
        case 'success':
          return 'bg-green-400';
        case 'warning':
          return 'bg-yellow-400';
      }
    },
  },
});
</script>
