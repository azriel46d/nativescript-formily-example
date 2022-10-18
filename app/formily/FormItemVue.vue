<template>
  <StackLayout
    :style="wrapperStyle"
    :class="wrapperClass"
    :orientation="layout"
    verticalAlignment="top"
  >
    <GridLayout columns="*,40" rows="auto" class="w-full items-center">
      <Label
        :text="`${label}${asterisk && required ? '*' : ''}`"
        :style="labelStyle"
        verticalAlignment="center"
        class="text-lg font-semibold"
        :class="labelClass"
        :textWrap="labelWrap"
        v-if="label"
      />
      <Label
        v-if="tooltip"
        @tap="showTooltip"
        col="2"
        class="bg-gray-100 rounded-full w-7 h-7 text-center text-xl"
        text="ℹ"
        horizontalAlignment="right"
      />
    </GridLayout>
    <GridLayout rows="auto">
      <slot></slot>
      <!-- slot outlet -->
    </GridLayout>
    <Label v-if="feedbackText" :text="feedbackText" :class="feedbackClass" />
  </StackLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue-demi";
export default defineComponent({
  name: "FormItem",
  props: {
    // className: {},
    required: {
      type: Boolean,
    },
    label: {
      type: String,
    },
    //colon: {}
    labelStyle: {},
    labelClass: {},
    // labelAlign: {},
    labelWrap: {
      type: Boolean,
      default: false,
    },
    // labelWidth: {},
    // labelCol: {},
    layout: {
      type: String,
      default: "vertical",
    },
    tooltip: {},
    // wrapperWidth: {},
    // wrapperCol: {},
    // wrapperAlign: {},
    // wrapperWrap: {},
    wrapperStyle: {},
    wrapperClass: {},
    // fullness: {},
    // addonBefore: {},
    // addonAfter: {},
    // size: {},
    // extra: {},
    feedbackText: {},
    // feedbackLayout: {},
    // tooltipLayout: {},
    feedbackStatus: {
      type: String,
      enum: ["error", "success", "warning"],
    }, // error/success/warning
    // feedbackIcon: {},
    asterisk: {
      type: Boolean
    },
    gridSpan: {},
    // bordered: { default: true },
    // inset: { default: false },
  },
  computed: {
    feedbackClass(): string {
      switch (this.feedbackStatus) {
        case "error":
          return "bg-red-400";
        case "success":
          return "bg-green-400";
        case "warning":
          return "bg-yellow-400";
        default:
          return "bg-gray-100";
      }
    },
  },
  methods: {
    showTooltip() {
      alert(this.tooltip);
    },
  }
});
</script>
