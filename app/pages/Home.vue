<template>
  <RootLayout>
    <Page>
      <ActionBar>
        <Label text="{N} + Formily = ❤️‍🔥" class="font-bold text-lg" />
      </ActionBar>
      <StackLayout orientation="vertical"  class="p-4">
        <Form :form="form">
          <SchemaField :schema="schema" />
        </Form>
      </StackLayout>
    </Page>
  </RootLayout>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/vue";
//@ts-ignore
import Form from "@/formily/Form";
//@ts-ignore
import Input from "@/formily/Input";
import FormItem from "@/formily/FormItem";
import Password from "@/formily/Password";
import Switch from "@/formily/Switch";
import DatePicker from "@/formily/DatePicker";
import TimePicker from "@/formily/TimePicker";

const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Input,
    Password,
    Switch,
    DatePicker,
    TimePicker,
  },
});
export default Vue.extend({
  data() {
    return {
      form: createForm(),
      schema: {
        type: "object",
        properties: {
          username: {
            type: "string",
            title: "Username",
            required: true,
            'x-decorator': 'FormItem',
            "x-component": "Input",
            "x-component-props": {
              hint: "Username",
              keyboardType: "datetime",
            },
          },
          password: {
            type: "string",
            required: true,
            "x-component": "Password"
          },
          testSwitch: {
            type: "string",
            title: "Rememeber me?",
            required: true,
            "x-decorator": "FormItem",
            // "x-decorator-props": {
            //   layout: "horizontal"
            // }, //TODO
            "x-component": "Switch"
          },
          from: {
            type: "string",
            title: "DatePicker",
            required: true,
            "x-decorator": "FormItem",
            // "x-decorator-props": {
            //   layout: "horizontal"
            // }, //TODO
            "x-component": "DatePicker"
          },
          time: {
            type: "string",
            title: "Time Picker",
            required: true,
            "x-decorator": "FormItem",
            // "x-decorator-props": {
            //   layout: "horizontal"
            // }, //TODO
            "x-component": "TimePicker"
          },
          firstName: {
            type: "string",
            title: "Test2",
            required: true,
            "x-component": "Input",
            "x-component-props": {
              hint: "First Name",
            },
          },
          lastName: {
            type: "string",
            "x-component-props": {
              hint: "Last Name",
            },
            required: true,
            "x-component": "Input",
          },
        },
      },
    };
  },
  computed: {
    message() {
      return "Blank {N}-Vue app";
    },
  },
  components: {
    Form,
    SchemaField,
    FormItem,
  },
  methods: {
    logMessage() {
      console.log("You have tapped the message!");
    },
  },
});
</script>

<style>
/* .info {
    font-size: 20;
  } */
</style>
