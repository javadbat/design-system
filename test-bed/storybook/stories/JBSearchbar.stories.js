import React from 'react';
import JBSearchbar from '../../../react-component/jb-searchbar/lib/JBSearchbar';
export default {
    title: 'Example/JBSearchbar',
    component: JBSearchbar
};
const Template = (args) => <JBSearchbar {...args}></JBSearchbar>;
export const Normal = Template.bind({});
Normal.args = {
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
                    return option.title
                },
                getOptionValue: (option) => {
                    return option.value
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