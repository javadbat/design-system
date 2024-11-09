import React from 'react';
import {JBImageInput} from 'jb-image-input-react';
import JBImageInputActionTest from './pages/JBImageInputActionTest';
export default {
  title: 'Example/JBImageInput',
  component: JBImageInput
};
const Template = (args) => <JBImageInput {...args}></JBImageInput>;
export const Normal = Template.bind({});
Normal.args = {
  acceptTypes: "image/jpeg,image/jpg,image/png,image/svg+xml",
  message:"پیام اضافی"
};
const ActionTestTemplate = (args) => <JBImageInputActionTest></JBImageInputActionTest>;
export const ActionTest = ActionTestTemplate.bind({});

const PlaceHolderTemplate = (args) => (
  <JBImageInput {...args}>
    <div slot="placeholder" style={{width:'100%',height:'100%'}}>
      <div style={{width:'100%',height:'100%', background:'red', display:'flex', justifyContent:'center', alignItems:'center'}}>custom placeholder</div>
    </div>
  </JBImageInput>
);
export const WithPlaceHolder = PlaceHolderTemplate.bind({});