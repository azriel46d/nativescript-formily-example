<template>
  <RootLayout>
    <Page>
      <ActionBar>
        <Label text="{N} + Formily = ❤️‍🔥" class="font-bold text-lg" />
      </ActionBar>
      <StackLayout>
        <FormItem>
          <TextField hint="test" />
        </FormItem>
        <Form :form="form">
          <SchemaField :schema="schema" />
        </Form>
      </StackLayout>
    </Page>
  </RootLayout>
</template>

<script lang="ts">
import Vue from 'nativescript-vue';
import { createForm } from '@formily/core';
import { createSchemaField } from '@formily/vue';
import Input from '@/formily/input';
import FormItem from '@/formily/FormItem.vue';

import Form from '@/formily/form';
const { SchemaField } = createSchemaField({
  components: {
    Input,
    Form,
    FormItem,
  },
});
export default Vue.extend({
  data() {
    return {
      form: createForm(),
      schema: {
        type: 'object',
        properties: {
          username: {
            type: 'string',
            title: 'Username',
            required: true,
            'x-component': 'Input',
            'x-component-props': {
              hint: 'Username',
              keyboardType: 'datetime',
            },
          },
          password: {
            type: 'string',
            required: true,
            'x-component': 'Input',
            'x-component-props': {
              hint: 'Password',
              secure: true,
            },
          },
          firstName: {
            type: 'string',
            title: 'Test2',
            required: true,
            'x-component': 'Input',
            'x-component-props': {
              hint: 'First Name',
            },
          },
          lastName: {
            type: 'string',
            'x-component-props': {
              hint: 'Last Name',
            },
            required: true,
            'x-component': 'Input',
          },
        },
      },
    };
  },
  computed: {
    message() {
      return 'Blank {N}-Vue app';
    },
  },
  components: {
    Form,
    SchemaField,
  },
  methods: {
    logMessage() {
      console.log('You have tapped the message!');
    },
  },
});
</script>

<style>
/* .info {
    font-size: 20;
  } */
</style>
