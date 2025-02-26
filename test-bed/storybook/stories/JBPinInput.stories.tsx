import React, { useRef } from 'react';
import { JBPinInput, Props } from 'jb-pin-input/react';
import { JBPinInputStyleTest } from './pages/JBPinInput/JBPinInputStyleTest';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/JBPinInput",
  component: JBPinInput,
};
export default meta;
type Story = StoryObj<typeof JBPinInput>;

export const Normal: Story = {
  args: {
    label: 'pin input',
    message: "please fill the pin",
    value: "",
  }
};

export const AutoFocus: Story = {
  args: {
    label: 'autofocus',
    autofocus: true,
    value: "",
  }
};

export const charLength: Story = {
  args: {
    label: '8 digit pin',
    value: "",
    charLength: 8
  }
};

export const Required: Story = {
  args: {
    label: 'required',
    required: true
  }
}
export const WithValidation: Story = {
  render:
    (args) => {
      const ref = useRef(null);
      const validationList = [
        {
          validator: (value) => {
            return value.startsWith("1");
          },
          message: "pin input must be start with 1"
        }
      ];
      return (
        <div ref={ref}>
          <JBPinInput {...args} ref={ref} validationList={validationList} onComplete={(e) => console.log("complete", e)} required onChange={() => { console.log("change");}} />
        </div>
      );
    },
  args: {
    label: "will jump on overflow",
  }
};

export const PinInputStyle:Story = {
  render:() => <JBPinInputStyleTest></JBPinInputStyleTest>
}; 
