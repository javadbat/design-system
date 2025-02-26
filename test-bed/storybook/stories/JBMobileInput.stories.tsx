import { JBMobileInput, Props } from 'jb-mobile-input/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/Inputs/JBMobileInput",
  component: JBMobileInput,
};
export default meta;
type Story = StoryObj<typeof JBMobileInput>;

export const Normal: Story = {
  args: {
    label: 'mobile',
    message: "please enter your mobile number",
    // placeholder:"phone",
  }
};
