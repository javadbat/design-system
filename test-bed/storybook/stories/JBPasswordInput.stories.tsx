import { JBPasswordInput, Props } from 'jb-password-input/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/Inputs/JBPasswordInput",
  component: JBPasswordInput,
};
export default meta;
type Story = StoryObj<typeof JBPasswordInput>;

export const Normal: Story = {
  args: {
    label: 'password',
    message: "simple password input",
  }
};
