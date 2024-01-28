import React from 'react';
import {JBGridData, JBGrid} from 'jb-grid';
import JBGridTest from './pages/jb-grid/JBGridTest';
export default {
    title: 'Example/JBGrid',
    component: JBGrid
};
const Template = (args) => <JBGridTest {...args}></JBGridTest>;
export const Normal = Template.bind({});
Normal.args = {
    config: new JBGridData()
};
    