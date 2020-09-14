import React from 'react';
import JBGrid from '../../../react-component/jb-grid';
import JBGridData from '../../../react-component/jb-grid/lib/JBGridData';
import JBGridBridge from './pages/JBGridBridge';
export default {
    title: 'Example/JBGrid',
    component: JBGrid
};
const Template = (args) => <JBGrid {...args} bridge={JBGridBridge}></JBGrid>;
export const Normal = Template.bind({});
Normal.args = {
    config: new JBGridData()
};
    