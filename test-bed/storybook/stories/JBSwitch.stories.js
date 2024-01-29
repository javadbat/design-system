import React from 'react';
import {JBSwitch} from '../../../react-component/jb-switch/index';
import { action } from '@storybook/addon-actions';
import JBSwitchTest from '../stories/pages/JBSwitchTestPage';
import JBSwitchIsLoadingTest from '../stories/pages/JBSwitchIsLoadingTestPage';
import {JBSwitchWebComponent} from '../../../web-component/jb-switch/dist/jb-switch';
console.log(JBSwitchWebComponent);
export default {
    title: 'Example/JBSwitch',
    component: JBSwitch
};

const Template = (args) => <JBSwitch trueTitle={args.trueTitle} falseTitle={args.falseTitle} value={args.value} onChange={args.onChange} isLoading={args.isLoading}></JBSwitch>;

export const Normal = Template.bind({});
Normal.args = {
    value:false,
    trueTitle:'فعال',
    falseTitle:'غیر فعال',
    onChange:(e)=>{console.log(e);action('onChange')(e);}
};
const TestTemplate = (args) => <JBSwitchTest trueTitle={args.trueTitle} falseTitle={args.falseTitle} value={args.value} onChange={args.onChange}></JBSwitchTest>;
export const Switch = TestTemplate.bind({});
Switch.args = {
    trueTitle:'فعال',
    falseTitle:'غیر فعال',
};
const IsLoadingTemplate = (args) => <JBSwitchIsLoadingTest trueTitle={args.trueTitle} falseTitle={args.falseTitle} value={args.value} onChange={args.onChange} isLoading={args.isLoading}></JBSwitchIsLoadingTest>;
export const IsLoadingSwitch = IsLoadingTemplate.bind({});
IsLoadingSwitch.args = {
    trueTitle:'فعال',
    falseTitle:'غیر فعال',
};
const WCTemplate = (args) => <jb-switch true-title={args.trueTitle} false-title={args.falseTitle}></jb-switch>;

export const WebComponent = WCTemplate.bind({});
WebComponent.args = {
    value:false,
    trueTitle:'فعال',
    falseTitle:'غیر فعال',
    onChange:(e)=>{console.log(e);action('onChange')(e);}
};