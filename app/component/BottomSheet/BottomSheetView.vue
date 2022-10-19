<template>
  <GridLayout
    class="bg-sky-100 rounded-t-lg p-4"
    rows="auto, auto"
    verticalAlignment="bottom"
  >
    <Label v-if="label" :text="label" class="text-2xl mb-2" />
    <slot></slot>
  </GridLayout>
</template>

<script>
import { CloseRootLayout } from "../OpenRootLayout";
export default {
  props: {
    label: {
      type: String,
    },
  },
  methods: {
    onTapEmpty(e) {
      CloseRootLayout(e.object);
    },
  },
};
</script>

<style></style>
