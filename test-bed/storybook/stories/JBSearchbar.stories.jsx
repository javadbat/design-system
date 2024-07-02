import React from 'react';
import JBSearchbar from '../../../react-component/jb-searchbar/dist/JBSearchbar';
export default {
  title: 'Example/JBSearchbar',
  component: JBSearchbar
};
const Template = (args) => <JBSearchbar {...args}></JBSearchbar>;
export const Normal = Template.bind({});
Normal.args = {
  placeholder:'select filter',
  columnList: [
    {
      key: 'title',
      label: 'title',
      type: 'TEXT'
    },
    {
      key: 'name',
      label: 'name',
      type: 'TEXT',
      maxUsageCount: 3
    },
    {
      key: 'age',
      label: 'age',
      type: 'TEXT'
    },
    {
      key: 'fromDate',
      label: 'from date',
      type: 'DATE'
    },
    {
      key: 'GENDER',
      label: 'gender',
      type: 'SELECT',
      config: {
        optionList: [
          {
            title: 'male',
            value: 'MALE'
          },
          {
            title: 'female',
            value: 'FEMALE'
          }
        ],
        getOptionTitle: (option) => {
          return option?.title || "";
        },
        getOptionValue: (option) => {
          return option?.value || "";
        }
      }

    },
    {
      key: 'fromDate',
      label: 'to date',
      type: 'DATE'
    }
  ],
  onSearch:()=>{
    console.log('search happend');
  }
};

const RTLTemplate = (args) => <div style={{'direction':'rtl'}}><JBSearchbar {...args}></JBSearchbar></div>;
export const RTLSample = RTLTemplate.bind({});
RTLSample.args = {
  placeholder:'نوع فیلتر را انتخاب کنید',
  columnList: [
    {
      key: 'title',
      label: 'تیتر',
      type: 'TEXT'
    },
    {
      key: 'name',
      label: 'نام',
      type: 'TEXT',
      maxUsageCount: 3
    },
    {
      key: 'age',
      label: 'سن',
      type: 'TEXT'
    },
    {
      key: 'fromDate',
      label: 'از تاریخ',
      type: 'DATE'
    },
    {
      key: 'GENDER',
      label: 'جنسیت',
      type: 'SELECT',
      config: {
        optionList: [
          {
            title: 'آقا',
            value: 'MALE'
          },
          {
            title: 'خانم',
            value: 'FEMALE'
          }
        ],
        getOptionTitle: (option) => {
          return option.title;
        },
        getOptionValue: (option) => {
          return option.value;
        }
      }

    },
    {
      key: 'fromDate',
      label: 'تا تاریخ',
      type: 'DATE'
    }
  ]
};
export const SearchOnChange = Template.bind({});
SearchOnChange.args = {
  ...Normal.args,
  searchOnChange: true,

};