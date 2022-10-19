<template>
  <GridLayout
    class="bg-sky-100 rounded-t-lg p-4 "
    height="50%"
    marginTop="50%"
    rows="auto, auto"
  > 
    <Label v-if="label" text="label" class="text-2xl mb-2" />
    <slot></slot>
  </GridLayout>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
};
</script>

<style></style>
