import {JBFileInput, Props} from 'jb-file-input/react';
import type { Meta, StoryObj } from '@storybook/react';


const meta: Meta<Props> = {
  title: "Example/form elements/JBFileInput",
  component: JBFileInput,
};
export default meta;
type Story = StoryObj<typeof JBFileInput>;

export const Normal:Story = {
  args:{
    
  }
};