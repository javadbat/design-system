import React, { useRef } from "react";
import { JBDateInput } from "jb-date-input-react";
import { JBInput } from "jb-input-react";
import { JBButton } from "jb-button-react";
import 'jb-form';
export default {
  title: "Example/JBForm",
  component: JBDateInput,
};

const Template = (args) => <jb-form {...args}></jb-form>;
export const Normal = Template.bind({});
Normal.args = {
  name:"testForm"
};


export const FormTest = {
  render:
    (args) => {
      const ref = useRef(null);
      return (
        <form is="jb-form" ref={ref} {...args}>
          <input required></input>
          <JBInput name="testJBInput" required label="name" />
          <JBDateInput name="testJBDateInput" required label="birth date" />
          <JBButton type="submit" />
        </form>
      );
    },
};
FormTest.args = {
  name: "test-form",
};

