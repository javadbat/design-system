import React, { Fragment } from 'react';
import { JBInput, Props } from 'jb-input/react';
import JBInputNumberTest from './pages/JBInput/JBInputNumberTest';
import JBInputStylingTest from './pages/JBInput/JBInputStylingTest';
import JBInputTest from './pages/JBInput/JBInputTest';
import JBInputValidationList from './pages/JBInput/JBInputValidationList';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<Props> = {
  title: "Example/form elements/Inputs/JBInput",
  component: JBInput,
};
export default meta;
type Story = StoryObj<typeof JBInput>;

export const Normal: Story = {
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false
  }
};

export const Large: Story = {
  args: {
    label: 'متن ساختگی جهت نمایش در لیبل برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
    message: 'متن ساختگی جهت نمایش در پیام برای تست کردن طول کاراکترها و اندازه ی صفحه و زیر هم شدن متن در اندازه صفحه کوچک مثلا در سایز موبایل. این یک متن ساختگی می باشد',
  }
};

export const Password: Story = {
  args: {
    label: 'متن ساده',
    message: 'متن ثابت زیر کادر متن',
    type: 'password'
  }
};

export const testActions: Story = {
  render: () => <JBInputTest></JBInputTest>
};

export const testStyles: Story = {
  render: () => <JBInputStylingTest />
};

export const NumberTest: Story = {
  render: () => <JBInputNumberTest></JBInputNumberTest>
};

export const ValidationList: StoryObj<typeof JBInputValidationList> = {
  render: (args) => <JBInputValidationList {...args}></JBInputValidationList>,
  args: {
    inputRegex: /^.{8,}$/g,
    inputMessage: 'ورودی باید حداقل 8 کارکتر باشد',
    passwordRegex: /^(?=.*?[a-z])(?=.*?[0-9]).{8,}$/g,
    passwordMessage: 'رمز باید حداقل 8 کارکتر و حداقل شامل یک حرف انگلیسی و حداقل شامل یک عدد باشد',
    emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/g,
    emailMessage: 'آدرس ایمیل معتبر نیست ',
    mobileRegex: /^(\+98|0|0098)?9\d{9}$/g,
    mobileMessage: 'شماره موبایل معتبر نیست ',
  }
};

export const WithStartSection: Story = {
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <div slot="start-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
  }
};


export const WithEndSection: Story = {
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: <div slot="end-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
  }
};

export const WithStartAndEndSection: Story = {
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    children: (
      <Fragment>
        <div slot="end-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
        <div slot="start-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      </Fragment>)
  }
};

export const CustomMobileKeyboard: Story = {
  args: {
    'label': 'number keyboard',
    'inputmode': 'numeric'
  }
};