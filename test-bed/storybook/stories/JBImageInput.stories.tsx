import React from 'react';
import { JBImageInput, Props } from 'jb-image-input/react';
import JBImageInputActionTest from './pages/JBImageInputActionTest';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props<any>> = {
  title: "Example/form elements/JBImageInput",
  component: JBImageInput,
};
export default meta;
type Story = StoryObj<typeof JBImageInput>;

export const Normal: Story = {
  args: {
    acceptTypes: "image/jpeg,image/jpg,image/png,image/svg+xml",
    message: "extra message"
  }
};

export const ActionTest: Story = {
  render: (args) => <JBImageInputActionTest {...args}></JBImageInputActionTest>
};

export const WithPlaceHolder: Story = {
  render: (args) => (
    <JBImageInput {...args}>
      <div slot="placeholder" style={{ width: '100%', height: '100%' }}>
        <div style={{ width: '100%', height: '100%', background: 'red', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>custom placeholder</div>
      </div>
    </JBImageInput>
  )
};