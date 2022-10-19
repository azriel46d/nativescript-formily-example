<template>
  <GridLayout rows="*, auto" @tap="onTapEmpty">
    <GridLayout
      class="bg-sky-100 rounded-t-lg p-4 "
      rows="auto, auto"
      row="2"
    > 
      <Label text="Information" class="text-2xl mb-2" />
      <Label row="2" :text="text" class="text-lg" />
    </GridLayout>
  </GridLayout>
</template>

<script>
import { CloseRootLayout } from '../OpenRootLayout';
export default {
  props: {
    text: {
      type: String,
    },
  },
  methods: {
    onTapEmpty(e) {
      CloseRootLayout(e.object)
    }
  }
};
</script>

<style></style>
