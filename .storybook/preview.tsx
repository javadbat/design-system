
import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import type { Preview } from '@storybook/react'
import { withThemeByClassName } from '@storybook/addon-themes'
import {i18n}from 'jb-core/i18n';
import './index.css';
const preview: Preview = {
  parameters: {
    docs: {
      codePanel: true,
    },
    controls: {
      matchers: {
        //determine regex to show props controller with them
        color: /(background|color)$/i
      }
    },
    options: {
      storySort: {
        order: ['Getting Started', 'Theme', 'Components', 'General'],
      },
    },
  },
  tags: ['!autodocs'],
  decorators: [
    // add theme switch button in the header that will add rtl & ltr classes in page
    // withThemeByClassName({
    //   defaultTheme: 'ltr',
    //   themes: {
    //     'rtl': 'rtl',
    //     'ltr': 'ltr'
    //   },
    // }),
    (Story,context)=>{
      const [key,setKey] = useState("initial")
      useEffect(()=>{
        if(document.documentElement.lang != context.globals.locale){
          i18n.addEventListener("localeChange",()=>{
            setKey(context.globals.locale);
          })
          if(context.globals.locale == 'fa-num'){
            document.documentElement.lang = 'fa';
            i18n.setLocale(new Intl.Locale('fa',{calendar: 'persian',numberingSystem:'arabext'}))
          }else{
            document.documentElement.lang = context.globals.locale;
          }
        }
      },[context.globals.locale])
      useLayoutEffect(()=>{
        if(document.documentElement.dir != context.globals.dir){
          document.documentElement.dir = context.globals.dir;
        }
      },[context.globals.dir]);
      
      return <Story key={key}/>
    },
  ],
  globalTypes:{
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en', right: '🇺🇸', title: 'English' },
          { value: 'fa', right: '🇮🇷', title: 'Farsi(Persian)' },
          { value: 'fa-num', right: '🇮🇷', title: 'Farsi with fa Numbers' },
        ],
      },
    },
    dir: {
      name: 'Dir',
      description: 'page direction',
      defaultValue: 'ltr',
      toolbar: {
        icon: 'transfer',
        items: [
          { value: 'ltr', title: 'LTR' },
          { value: 'rtl', title: 'RTL' },
        ],
      },
    },
  }
}
export const tags = ["autodocs"];
export default preview;