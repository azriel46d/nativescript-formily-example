import { Form as FormType, IFormFeedback } from '@formily/core';
import { FormProvider as _FormProvider, h, useForm } from '@formily/vue';
import { defineComponent, VNode } from 'vue-demi';
import { Component } from 'vue/types/umd';

const FormProvider = _FormProvider as unknown as Component;

export interface FormProps {
  form?: FormType;
  component?: Component;
  previewTextPlaceholder: string | (() => VNode);
  onAutoSubmit?: (values: any) => any;
  onAutoSubmitFailed?: (feedbacks: IFormFeedback[]) => void;
  className?: string;
  colon?: boolean;
  labelAlign?: 'right' | 'left' | ('right' | 'left')[];
  wrapperAlign?: 'right' | 'left' | ('right' | 'left')[];
  labelWrap?: boolean;
  labelWidth?: number;
  wrapperWidth?: number;
  wrapperWrap?: boolean;
  labelCol?: number | number[];
  wrapperCol?: number | number[];
  fullness?: boolean;
  size?: 'small' | 'default' | 'large';
  layout?:
    | 'vertical'
    | 'horizontal'
    | 'inline'
    | ('vertical' | 'horizontal' | 'inline')[];
  direction?: 'rtl' | 'ltr';
  shallow?: boolean;
  feedbackLayout?: 'loose' | 'terse' | 'popover';
  tooltipLayout?: 'icon' | 'text';
  bordered?: boolean;
  breakpoints?: number[];
  inset?: boolean;
  spaceGap?: number;
  gridColumnGap?: number;
  gridRowGap?: number;
}

export const Form = defineComponent<FormProps>({
  name: 'FForm',
  props: [
    'form',
    'component',
    'previewTextPlaceholder',
    'onAutoSubmit',
    'onAutoSubmitFailed',
  ],
  setup(props, { attrs, slots, listeners }) {
    const top = useForm();

    return () => {
      const {
        form,
        component = 'form',
        onAutoSubmit = listeners?.autoSubmit,
        onAutoSubmitFailed = listeners?.autoSubmitFailed,
        previewTextPlaceholder = slots?.previewTextPlaceholder,
      } = props;

      const renderContent = (form: FormType) => {
        return h(
          'StackLayout',
          {
            attrs: {
              ...attrs,
            },
          },
          {
            default: () => [
              h(
                component,
                {
                  on: {
                    // submit: (e: Event) => {
                    //   e?.stopPropagation?.();
                    //   e?.preventDefault?.();
                    //   form
                    //     .submit(onAutoSubmit as (e: any) => void)
                    //     .catch(onAutoSubmitFailed as (e: any) => void);
                    // },
                  },
                },
                slots
              ),
            ],
          }
        );
      };

      if (form) {
        return h(
          FormProvider,
          { props: { form } },
          {
            default: () => renderContent(form),
          }
        );
      }

      if (!top.value) throw new Error('must pass form instance by createForm');

      return renderContent(top.value);
    };
  },
});

export default Form;
