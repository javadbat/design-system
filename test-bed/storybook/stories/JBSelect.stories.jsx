/* eslint-disable indent */
import React from 'react';
import {JBSelect,JBOptionList, JBOption} from 'jb-select/react';
import JBSelectStyleTest from '../stories/pages/JBSelect/JBSelectStyleTestPage';
import { action } from '@storybook/addon-actions';
import JBSelectDynamicList from './pages/JBSelect/JBSelectDynamicList';
import CustomizedOptions from './pages/JBSelect/CustomizedOptions';
import JBSelectDesign from './pages/JBSelect/JbSelectDesign';
export default {
  title: 'Example/JBSelect',
  component: JBSelect
};
const numberOptionList = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39']
const Template = ({optionListProps,...args}) => <JBSelect { ...args}><JBOptionList {...optionListProps} /></JBSelect>;
//replace and switch all test beween Template & WithOptionTemplate
const WithOptionTemplate = ({optionListProps,...args}) => (
  <JBSelect { ...args}>
    {
      optionListProps.optionList.map((option)=>(<JBOption key={option} value="option">{option}</JBOption>))
    }
  </JBSelect>
);
export const Normal = WithOptionTemplate.bind({});
Normal.args = {
  label:'select from menu',
  message:"please select a value",
  placeholder:"select number here",
  optionListProps:{
    optionList:numberOptionList,
  }
};
export const WithValue = Template.bind({});
WithValue.args = {
  label:'select from menu',
  message:"please select a value",
  placeholder:"select number here",
  value:"5",
  optionListProps:{
    optionList:numberOptionList,
  }
};
export const OptionObject = Template.bind({});
OptionObject.args = {
  label:'از منو انتخاب کنید',
  optionListProps:{
    optionList:[{
      name:'peter',
      family:'hanan',
      userId:1
    },
    {
      name:'reza',
      family:'asadi',
      userId:2
    }],
    getTitle:(option)=>{
      return `${option.name} ${option.family}`;
    },
    getValue:(option)=>{
      return option.userId;
    },
  },
  onChange:(e)=>{action('onChange')(e.target.value);}
};
export const EventTest = Template.bind({});
EventTest.args = {
  ...Normal.args,
  onKeyup:()=>{alert('keyup');},
  onChange:()=>{alert('Changed');}
};
export const RTLTemplate = ({optionListProps,...args}) => (
  <div style={{direction:'rtl'}}>
    <JBSelect {...args}>
      <JBOptionList {...optionListProps}></JBOptionList>
    </JBSelect>
  </div>
    );
RTLTemplate.args = {
  label:'از منو انتخاب کنید',
  optionListProps:{
    optionList:numberOptionList
  }
};
const StyleTestTemplate = (args) => <JBSelectStyleTest label={args.label}></JBSelectStyleTest>;
export const StyleTest = StyleTestTemplate.bind({});
StyleTest.args = {
  label:'از منو انتخاب کنید',
};
export const EmptyList = Template.bind({});
EmptyList.args = {
  label:'empty list',
  message:"this list is a empty list",
  optionListProps:{
    optionList:[1],
  }
};

const WithStyleTemplate = ({optionListProps,...args}) => <JBSelect style={{"--jb-select-mobile-modal-height":"50vh","--jb-select-mobile-modal-border-radius":"1rem"}} { ...args}><JBOptionList {...optionListProps} /></JBSelect>;
export const ModalHeight = WithStyleTemplate.bind({});
ModalHeight.args = {
  label:'select from in mobile',
  message:"put in mobile view and open menu. it must fill half of the page",
  placeholder:"select number here",
  optionListProps:{
    optionList:numberOptionList,
  }
};
//when user type and want to change text
const DynamicListTemplate = (args) => <JBSelectDynamicList></JBSelectDynamicList>;
export const DynamicList = DynamicListTemplate.bind({});
// customized option dom
const CustomizableOptionTemplate = (args) => <CustomizedOptions></CustomizedOptions>;
export const CustomizedOption = CustomizableOptionTemplate.bind({});

const JBSelectDesignTemplate = (args) => <JBSelectDesign></JBSelectDesign>;
export const JBSelectDesignTest = JBSelectDesignTemplate.bind({});