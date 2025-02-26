import React from 'react';
import { JBPaymentInput, Props } from 'jb-payment-input/react';
import 'jb-payment-input/bank-indicator';
import { BankIndicator } from 'jb-payment-input/bank-indicator/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/Inputs/JBPaymentInput",
  component: JBPaymentInput,
};
export default meta;
type Story = StoryObj<typeof JBPaymentInput>;

export const CardNumber: Story = {
  args: {
    label: 'card number',
    message: "please input 16 digit card number",
    value: "",
    inputType: "CARD"
  }
}
export const ShabaNumber: Story = {
  args: {
    label: 'shaba number',
    message: "please input shaba number",
    value: "",
    inputType: "SHABA"
  }
};

export const CardNumberWithBankLogo: Story = {
  args: {
    label: 'card number',
    message: "card number with bank logo",
    value: "",
    inputType: "CARD",
    children: <BankIndicator slot="end-section" />
  }
};

export const DashSeparatorCN: Story = {
  args: {
    label: 'card number',
    message: "please input 16 digit card number",
    value: "",
    separator: "-",
    inputType: "CARD"
  }
}