import React from 'react';
import {JBPaymentInput} from '../../../react-component/jb-payment-input';
import 'jb-payment-input/dist/bank-indicator/bank-indicator.js';
export default {
  title: 'Example/JBPaymentInput',
  component: JBPaymentInput
};
const Template = (args) => <JBPaymentInput { ...args}></JBPaymentInput>;
export const CardNumber = Template.bind({});
CardNumber.args = {
  label:'card number',
  message:"please input 16 digit card number",
  value:"",
  inputType:"CARD"
  // placeholder:"1234 5678 9012 3456",
};
export const ShabaNumber = Template.bind({});
ShabaNumber.args = {
  label:'shaba number',
  message:"please input shaba number",
  value:"",
  inputType:"SHABA"
  // placeholder:"1234 5678 9012 3456",
};
const WithLogoTemplate = (args) => <JBPaymentInput { ...args}><bank-indicator slot="end-section"></bank-indicator></JBPaymentInput>;
export const CardNumberWithBankLogo = WithLogoTemplate.bind({});
CardNumberWithBankLogo.args = {
  label:'card number',
  message:"card number with bank logo",
  value:"",
  inputType:"CARD"
  // placeholder:"1234 5678 9012 3456",
};
export const DashSeparatorCN = Template.bind({});
DashSeparatorCN.args = {
  label:'card number',
  message:"please input 16 digit card number",
  value:"",
  separator:"-",
  inputType:"CARD"
  // placeholder:"1234 5678 9012 3456",
};