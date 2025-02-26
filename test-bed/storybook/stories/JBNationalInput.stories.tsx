import { JBNationalInput, Props } from 'jb-national-input/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/Inputs/JBNationalInput",
  component: JBNationalInput,
};
export default meta;
type Story = StoryObj<typeof JBNationalInput>;

export const Normal: Story = {
  args: {
    label: 'national id',
    message: "please enter your national code",
  }
};
