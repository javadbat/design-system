import React from 'react';
import {JBSearchbar, Props} from 'jb-searchbar/react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/JBSearchbar",
  component: JBSearchbar,
};
export default meta;
type Story = StoryObj<typeof JBSearchbar>;

export const Normal:Story = {
  args:{
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
      console.log('search happened');
    }
  }
};

export const RTLSample:Story = {
  args:{
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
  },
  parameters: {
    themes:{
      themeOverride:'rtl'
    }
  },
};

export const SearchOnChange: Story = {
  args:{
    ...Normal.args,
    searchOnChange: true,
  }
};