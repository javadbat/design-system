import React from 'react';
import { JBCalendar, Props } from 'jb-calendar/react';
import JBCalendarTest from './pages/JBCalendar/JBCalendarTestPage';
import JBCalendarCustomTheme from './pages/JBCalendar/JBCalendarCustomTheme';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<Props> = {
  title: "Example/JBCalendar",
  component: JBCalendar,
};
export default meta;
type Story = StoryObj<typeof JBCalendar>;

export const Normal: Story = {
  args: {
    inputType: 'JALALI'
  }
};

export const CustomMonthName: Story = {
  args: {
    inputType: 'JALALI',
    jalaliMonthList: ['حَمَل', 'ثَور', 'جَوزا', 'سَرَطان', 'اَسَد', 'سُنبُله', 'میزان', 'عَقرَب', 'قَوس', 'جَدْی', 'دَلو', 'حوت']
  }
};



export const Gregorian: Story = {
  args: {
    inputType: 'GREGORIAN'
  },
};

export const valueTest: Story = {
  render: () => <JBCalendarTest></JBCalendarTest>
};

export const RightToLeft: Story = {
  args:{
    direction:'rtl',
  },
  parameters: {
    themes:{
      themeOverride:'rtl'
    }
  },
};
export const RTLGregorian: Story = {
  args:{
    direction:'rtl',
    inputType:'GREGORIAN'
  },
  parameters: {
    themes:{
      themeOverride:'rtl'
    }
  },
};

export const onMobile: Story = {
  parameters: {
    viewport:{
      defaultViewport:'mobile1'
    }
  },
};

const customThemeTemplate = (args) => (<JBCalendarCustomTheme {...args}></JBCalendarCustomTheme>);
export const CustomTheme = customThemeTemplate.bind({});
CustomTheme.args = {
  inputType: 'GREGORIAN'
};