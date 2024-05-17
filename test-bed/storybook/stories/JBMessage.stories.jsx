import React from "react";
import JBMessageTest from "./pages/JBMessage/JBMessageTest";
import JBMessageCustomStylesTest from "./pages/JBMessage/JBMessageCustomStylesTest";

export default {
    title: "Example/JBMessage",
    component: JBMessageTest,
};

const Template = (args) => <JBMessageTest />;
export const Normal = Template.bind({});
Normal.args = {};

const CustomTemplate = (args) => <JBMessageCustomStylesTest />;
export const CustomStyle = CustomTemplate.bind({});
CustomStyle.args = {};
