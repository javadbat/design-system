import React from 'react';
import {JBGridData, JBGrid} from 'jb-grid/react';
import JBGridTest from './pages/jb-grid/JBGridTest.jsx';
import CustomErrorTest from './pages/jb-grid/custom-error/JBGridTest.jsx';
export default {
  title: 'Example/JBGrid',
  component: JBGrid
};
const Template = (args) => <JBGridTest {...args}></JBGridTest>;
export const Normal = Template.bind({});
Normal.args = {
  config: new JBGridData()
};
export const WithPersianNumber = Template.bind({});
WithPersianNumber.args = {
  config: new JBGridData(),
  i18n:{showPersianNumber:true}
};  
const ContentErrorTemplate = (args) => <CustomErrorTest {...args}></CustomErrorTest>;
export const ContentError = ContentErrorTemplate.bind({});
ContentError.args = {
  config: new JBGridData()
};
    