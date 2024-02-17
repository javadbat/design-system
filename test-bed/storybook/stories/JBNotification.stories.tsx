import React from "react";
import {JBNotificationTest} from "./pages/jb-notification/jb-notification-test";
import JBMessageCustomStylesTest from "./pages/JBMessage/JBMessageCustomStylesTest";

export default {
    title: "Example/JBNotification",
    component: JBNotificationTest,
};

const Template = (args) => <JBNotificationTest />;
export const Normal = Template.bind({});
Normal.args = {};

const CustomTemplate = (args) => <JBMessageCustomStylesTest />;
export const CustomStyle = CustomTemplate.bind({});
CustomStyle.args = {};
