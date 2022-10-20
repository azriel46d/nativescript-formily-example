<template>
  <Page>
    <ActionBar>
      <Label text="{N} + Formily = ❤️‍🔥" class="font-bold text-lg" />
    </ActionBar>
    <RootLayout height="100%" width="100%" verticalAlignment="bottom">
      <GridLayout rows="*, auto">
        <ScrollView>
          <StackLayout orientation="vertical" class="p-4">
            <Form :form="form">
              <SchemaField :schema="schema" />
            </Form>
          </StackLayout>
        </ScrollView>
        <Button row="2" class="rounded bg-sky-400 text-white mb-4 w-10/12" @tap="lookAtFormData">👀 Form Data</Button>
      </GridLayout>
    </RootLayout>
  </Page>
</template>

<script lang="ts">
import Vue from "nativescript-vue";
import { createForm } from "@formily/core";
import { createSchemaField } from "@formily/vue";
import {
  DatePicker,
  Form,
  FormItem,
  Input,
  Switch,
  Password,
  TimePicker,
  Select
} from "@/formily";
import BottomSheetViewVue from "~/component/BottomSheet/BottomSheetView.vue";
import { OpenRootLayout } from "~/component/OpenRootLayout";

const { SchemaField } = createSchemaField({
  components: {
    Form,
    FormItem,
    Input,
    Password,
    Switch,
    DatePicker,
    TimePicker,
    Select
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
              disabled: true,
            },
            "x-decorator-props": {
              tooltip: "Lorem ipsum test a tooltip sheet with some text here.",
            },
            "x-reactions": {
              dependencies: ["firstName", "lastName"],
              fulfill: {
                state: {
                  value:
                    "{{$deps[0] ? `@${$deps[0]}${($deps[1] ? '.' + $deps[1] : '')}` : undefined}}",
                },
              },
            },
          },
          password: {
            type: "string",
            title: "Password",
            required: true,
            "x-decorator": "FormItem",
            "x-component": "Password",
            pattern: '/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/'
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
          country: {
            type: "string",
            title: "Country",
            required: true,
            "x-decorator": "FormItem",
            "x-component": "Select",
            enum: [{
              label: "🇨🇦 Canada",
              value: "CA"
            },{
              label: "🇬🇧 United Kingdom",
              value: "UK"
            },{
              label: "🇺🇸 United States",
              value: "Us"
            }]
          },
        },
      },
    };
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
    lookAtFormData() {
      const view = new Vue({
        render: (h) =>
          h(BottomSheetViewVue, { props: { label: "Form Values:" } }, [
            h("Label", {
              attrs: {
                text: JSON.stringify(this.form.values, null, 2),
                textWrap: true,
                row: 2,
              },
              class: "w-full text-lg mb-8 leading-tight",
            }),
          ]),
      }).$mount().nativeView;
      OpenRootLayout(view)
    },
  },
});
</script>

<style>
/* .info {
    font-size: 20;
  } */
</style>
