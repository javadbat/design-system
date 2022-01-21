import React from 'react';
import {JBGrid} from '../../../react-component/jb-grid';
import {JBGridData} from '../../../react-component/jb-grid/lib/JBGridData';
import JBGridTest from './pages/JBGridTest';
export default {
    title: 'Example/JBGrid',
    component: JBGrid
};
const Template = (args) => <JBGridTest {...args}></JBGridTest>;
export const Normal = Template.bind({});
Normal.args = {
    config: new JBGridData()
};
    