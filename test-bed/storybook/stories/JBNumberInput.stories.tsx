import React from 'react';
import { JBNumberInput, Props } from 'jb-number-input/react';
import JBInputNumberTest from './pages/JBInput/JBInputNumberTest';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/Inputs/JBNumberInput",
  component: JBNumberInput,
};
export default meta;
type Story = StoryObj<typeof JBNumberInput>;

export const Normal: Story = {
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder',
    disabled: false,
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
  }
};

export const NumberWithComma: Story = {
  args: {
    label: 'تعداد به عدد',
    message: 'هر سه رقم با کاما جدا میگردند',
    showThousandSeparator: true,
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
  }
};

export const NumberWithMinMax: Story = {
  args: {
    label: 'تعداد به عدد',
    message: 'عدد بین 100 تا 10000',
    maxValue: 10000,
    minValue: 100,
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
  }
};

export const NonNegativeNumberWithUnderlineSeparato: Story = {
  args: {
    label: 'تعداد به عدد',
    message: 'هر سه رقم با خط تیره جدا میگردند',
    acceptNegative: false,
    showThousandSeparator: true,
    thousandSeparator: '_',
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
  }
};
export const NumberWithButtons: Story = {
  args: {
    label: 'عددی با دکمه',
    message: 'دکمه های +-',
    type: 'number',
    showControlButton: true,
    step: 100,
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
  }
};

export const NumberWithPersianChar: Story = {
  args: {
    label: 'type number',
    message: 'type en number but user see persian char number',
    type: 'number',
    showPersianNumber: true,
    onChange: (e) => { console.log(`new number is ${e.target.value}`); }
  }
};

export const numberTest: Story = {
  render: () => <JBInputNumberTest></JBInputNumberTest>,
};

export const WithStartSection: Story = {
  render: (args) => {
    return (
      <JBNumberInput {...args}>
        <div slot="start-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      </JBNumberInput>
    );
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
};


export const WithEndSection: Story = {
  render: (args) => {
    return (
      <JBNumberInput {...args}>
        <div slot="end-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      </JBNumberInput>
    );
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
};

export const WithStartAndEndSection: Story = {
  render: (args) => {
    return (
      <JBNumberInput {...args}>
        <div slot="end-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
        <div slot="start-section" style={{ width: '24px', height: '24px', backgroundColor: '#262626' }}></div>
      </JBNumberInput>
    );
  },
  args: {
    label: 'label',
    message: 'static text under input show all the time',
    placeholder: 'place holder'
  }
};

