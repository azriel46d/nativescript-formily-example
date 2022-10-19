<template>
  <GridLayout
    class="bg-sky-100 rounded-t-lg p-4 "
    height="30%"
    marginTop="70%"
    rows="auto, auto"
  > 
    <Label text="Information" class="text-2xl mb-2" />
    <Label row="2" :text="text" class="text-lg" />
  </GridLayout>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
    },
  },
};
</script>

<style></style>
