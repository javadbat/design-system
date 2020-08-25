import React from 'react';
import JBCalendar from '../../../react-component/jb-calendar/JBCalendar'
export default {
    title: 'Example/JBCalendar',
    component: JBCalendar
  };
  const Template = (args) => <JBCalendar></JBCalendar>;
  export const Normal = Template.bind({});
  Normal.args = {
  type: 'primary'
};