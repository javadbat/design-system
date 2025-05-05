
import type {Preview} from '@storybook/react'
import {withThemeByClassName} from '@storybook/addon-themes'
import './index.css';
const preview:Preview = {
  parameters:{
    controls:{
      matchers:{
        //determine regex to show props controller with them
        color:/(background|color)$/i
      }
    },
    options:{
      storySort: {
        order: ['Getting Started', 'Theme', 'Components', 'General'],
      },
    }
  },
  decorators:[
    // add theme switch button in the header that will add rtl & ltr classes in page
    withThemeByClassName({
      defaultTheme:'ltr',
      themes:{
        'rtl':'rtl',
        'ltr':'ltr'
      },
    })
  ]
}
export const tags = ["autodocs"];
export default preview;