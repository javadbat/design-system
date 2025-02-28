/* eslint-disable indent */
import React from 'react';
import { JBSelect, JBOptionList, JBOption, Props } from 'jb-select/react';
import JBSelectStyleTest from './pages/JBSelect/JBSelectStyleTestPage';
import { action } from '@storybook/addon-actions';
import JBSelectDynamicList from './pages/JBSelect/JBSelectDynamicList';
import CustomizedOptions from './pages/JBSelect/CustomizedOptions';
import JBSelectDesign from './pages/JBSelect/JbSelectDesign';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/form elements/JBSelect",
  component: JBSelect,
};
export default meta;
type Story = StoryObj<typeof JBSelect>;

const numberOptionList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39'];

// const Template = ({optionListProps,...args}) => <JBSelect { ...args}><JBOptionList {...optionListProps} /></JBSelect>;
//replace and switch all test between Template & WithOptionTemplate
// const WithOptionTemplate = ({optionListProps,...args}) => (
//   <JBSelect { ...args}>
//     {
//       optionListProps.optionList.map((option)=>(<JBOption key={option} value="option">{option}</JBOption>))
//     }
//   </JBSelect>
// );
export const Normal: Story = {
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here",
    children: <JBOptionList optionList={numberOptionList} />
  }
};
export const WithValue: Story = {
  args: {
    label: 'select from menu',
    message: "please select a value",
    placeholder: "select number here",
    value: "5",
    children: <JBOptionList optionList={numberOptionList} />
  }
};

export const OptionObject: Story = {
  args: {
    label: 'از منو انتخاب کنید',
    children: <JBOptionList optionList={[{ name: 'peter', family: 'hanan', userId: 1 }, { name: 'reza', family: 'asadi', userId: 2 }]} getTitle={(option) => `${option.name} ${option.family}`} getValue={(option) => option.userId} />,
    onChange: (e) => { action('onChange')(e.target.value); }
  }
};

export const EventTest: Story = {
  args: {
    ...Normal.args,
    onChange: () => alert('Changed')
  }
};

export const RTL:Story = {
  args: {
    label: 'از منو انتخاب کنید',
    children:<JBOptionList optionList={numberOptionList} />
  },
  parameters: {
    themes:{
      themeOverride:'rtl'
    },
    docs: {
      description: {
        story: 'RTL test'
      }
    },
  }
};
export const StyleTest:Story = {
  render: (args) => <JBSelectStyleTest label={args.label}></JBSelectStyleTest>,
  args:{
    label: 'از منو انتخاب کنید',
  }
};
export const EmptyList:Story = {
  args:{
    label: 'empty list',
    message: "this list is a empty list",
    children: <JBOptionList optionList={[]} />,
  }
};

export const ModalHeight:Story = {
  args:{
    label: 'select from in mobile',
    message: "put in mobile view and open menu. it must fill half of the page",
    placeholder: "select number here",
    children: <JBOptionList optionList={numberOptionList} />,
    style: { "--jb-select-mobile-modal-height": "50vh", "--jb-select-mobile-modal-border-radius": "1rem" } as React.CSSProperties
  }
};
//when user type and want to change text
export const DynamicList:Story = {
  render:() => <JBSelectDynamicList />,
};

// customized option dom
export const CustomizedOption:Story = {
  render:() => <CustomizedOptions />,
};

export const JBSelectDesignTest:Story = {
  render:() => <JBSelectDesign />,
};