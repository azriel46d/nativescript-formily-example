<template>
  <Page>
    <ActionBar>
      <Label text="{N} + Formily = ❤️‍🔥" class="font-bold text-lg" />
    </ActionBar>
    <RootLayout height="100%" width="100%" verticalAlignment="bottom">
      <ScrollView>
        <StackLayout orientation="vertical" class="p-4">
          <Form :form="form">
            <SchemaField :schema="schema" />
          </Form>
        </StackLayout>
      </ScrollView>
    </RootLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/vue";
import { DatePicker, Form, FormItem, Input, Switch, Password, TimePicker } from "@/formily"


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
          username: {
            type: "string",
            title: "Username",
            required: true,
            "x-decorator": "FormItem",
            "x-component": "Input",
            "x-component-props": {
              hint: "@ChuckNorris...",
              disabled: true
            },
            "x-decorator-props": {
              tooltip: "Lorem ipsum test a tooltip sheet with some text here.",
            },
            "x-reactions": {
              "dependencies": ["firstName","lastName"],
              "fullfill": {
                "state": {
                  "value": "`@${firstName}.${lastName}`"
                }
              }
            }
          },
          password: {
            type: "string",
            title: "Password",
            required: true,
            "x-decorator": "FormItem",
            "x-component": "Password",
          },
          
          
          testSwitch: {
            type: "string",
            title: "Rememeber me?",
            required: true,

            "x-decorator": "FormItem",
            "x-component": "Switch",
          },
          from: {
            type: "string",
            title: "Appointment Date",
            required: true,
            "x-decorator": "FormItem",
            "x-component": "DatePicker",
          },
          time: {
            type: "string",
            title: "Appointment Time",
            required: true,
            "x-decorator": "FormItem",
            "x-component": "TimePicker",
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
