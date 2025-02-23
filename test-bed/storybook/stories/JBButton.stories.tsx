import type { Meta, StoryObj } from '@storybook/react';
import { JBButton, Props } from "jb-button/react";

const meta: Meta<Props> = {
  title: "Example/form elements/JBButton",
  component: JBButton,
  argTypes: {
    loadingText: { control: 'text' },
  },
  args:{
    children:"button"
  }

};
export default meta;
type Story = StoryObj<typeof JBButton>;

export const Primary: Story = {
  args: {
    type: "primary",
    children: "primary button",
    loadingText: "loading text",
    disabled: true,
  }
};

export const Secondary: Story = {
  args: {
    type: "secondary button",
    children: "submit information",
    loadingText: "",
  }
};

export const Disabled: Story = {
  args: {
    type: "secondary",
    loadingText: "",
    disabled: true,
  }
};

export const Loading: Story = {
  args: {
    type: "primary",
    children: "ثبت محتوی",
    isLoading: true,
    loadingText: "لطفا صبر کنید",
  }
};

export const LoadingSecondary:Story = {
  args:{
    type: "secondary",
    children: "ثبت اطلاعات",
    isLoading: true,
    loadingText: "لطفا صبر کنید",
  }
};
