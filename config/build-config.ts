export type WebComponentBuildConfig = {
  name: string;
  path: string;
  outputPath: string;
  umdName: string;
  external?: string[];
  umdIncludes?: string[];
  tsconfigPath?:string;
  globals?: { [key: string]: string };
};
export type ReactComponentBuildConfig = {
  name: string;
  path: string;
  outputPath: string;
  umdName?: string;
  external?: string[];
  umdIncludes?: string[];
  globals?: { [key: string]: string };
  tsconfigPath?:string;
};
const webComponentList: WebComponentBuildConfig[] = [
  //TODO: separate modules from web-components
  {
    name: "jb-validation",
    path: "/modules/jb-validation/lib/jb-validation.ts",
    outputPath: "/modules/jb-validation/dist/jb-validation.js",
    umdName: "JBValidation",
  },
  {
    name: "jb-message",
    path: "/modules/jb-message/lib/JBMessage.ts",
    outputPath: "/modules/jb-message/dist/JBMessage.js",
    umdName: "JBMessage",
  },
  {
    name: "jb-input",
    path: "/web-component/jb-input/lib/index.ts",
    outputPath: "/web-component/jb-input/dist/index.js",
    umdName: "JBInput",
    external: ["jb-validation","jb-form"],
    globals: {
      "jb-validation": "JBValidation",
    },
  },
  {
    name: "jb-button",
    path: "/web-component/jb-button/lib/jb-button.ts",
    outputPath: "/web-component/jb-button/dist/jb-button.js",
    external: [],
    umdName: "JBButton",
  },
  {
    name: "jb-popover",
    path: "/web-component/jb-popover/lib/jb-popover.ts",
    outputPath: "/web-component/jb-popover/dist/jb-popover.js",
    external: [],
    umdName: "JBButton",
  },
  {
    name: "jb-calendar",
    path: "/web-component/jb-calendar/lib/jb-calendar.ts",
    outputPath: "/web-component/jb-calendar/dist/jb-calendar.js",
    external: ["date-fns", "date-fns-jalali"],
    umdName: "JBCalendar",
    //because date-fns dont have any umd module export i have to do this so it doenst exclude in umd build
    umdIncludes: ["date-fns", "date-fns-jalali"],
  },
  {
    name: "jb-date-input",
    path: "/web-component/jb-date-input/lib/jb-date-input.ts",
    outputPath: "/web-component/jb-date-input/dist/jb-date-input.js",
    umdName: "JBDateInput",
    external: ["date-fns", "date-fns-jalali", "jb-calendar","jb-input","jb-popover","jb-validation"],
    //because date-fns dont have any umd module export i have to do this so it doesn't exclude in umd build
    umdIncludes: ["date-fns", "date-fns-jalali", "jb-calendar","jb-input","jb-popover","jb-validation"],
  },
  {
    name: "jb-file-input",
    path: "/web-component/jb-file-input/lib/jb-file-input.ts",
    outputPath: "/web-component/jb-file-input/dist/jb-file-input.js",
    umdName: "JBFileInput",
  },
  {
    name: "jb-image-input",
    path: "/web-component/jb-image-input/lib/jb-image-input.ts",
    outputPath: "/web-component/jb-image-input/dist/jb-image-input.js",
    umdName: "JBDateImageInput",
    external: ["jb-validation"],
    globals: {
      "jb-validation": "JBValidation",
    },
  },
  {
    name: "jb-select",
    path: "/web-component/jb-select/lib/jb-select.ts",
    outputPath: "/web-component/jb-select/dist/jb-select.js",
    umdName: "JBSelect",
    external: ["jb-validation"],
    globals: {
      "jb-validation": "JBValidation",
    },
  },
  {
    name: "jb-textarea",
    path: "/web-component/jb-textarea/lib/jb-textarea.ts",
    outputPath: "/web-component/jb-textarea/dist/jb-textarea.js",
    umdName: "JBTextarea",
    external: ["jb-validation"],
    globals: {
      "jb-validation": "JBValidation",
    },
  },
  {
    name: "jb-searchbar",
    path: "/web-component/jb-searchbar/lib/jb-searchbar.ts",
    outputPath: "/web-component/jb-searchbar/dist/jb-searchbar.js",
    external: ["jb-input", "jb-select", "jb-date-input"],
    umdName: "JBSearchbar",
    globals: {
      "jb-input": "JBInput",
      "jb-select": "JBSelect",
      "jb-date-input": "JBDateInput",
    },
  },
  {
    name: "jb-time-picker",
    path: "/web-component/jb-time-picker/lib/jb-time-picker.ts",
    outputPath: "/web-component/jb-time-picker/dist/jb-time-picker.js",
    external: [],
    umdName: "JBTimePicker",
  },
  {
    name: "jb-time-input",
    path: "/web-component/jb-time-input/lib/jb-time-input.ts",
    outputPath: "/web-component/jb-time-input/dist/jb-time-input.js",
    external: ["jb-time-picker","jb-input","jb-popover","jb-validation"],
    umdName: "JBTimeInput",
    globals: {
      "jb-time-picker": "JBTimePicker",
      "jb-input": "JBInput",
      "jb-popover": "JBPopover",
      "jb-validation":"JBValidation"
    },
  },
  {
    name: "jb-loading",
    path: "/web-component/jb-loading/lib/JBLoading.js",
    outputPath: "/web-component/jb-loading/dist/JBLoading.js",
    external: [],
    umdName: "JBLoading",
  },
  {
    name: "jb-pin-input",
    path: "/web-component/jb-pin-input/lib/JBPinInput.ts",
    outputPath: "/web-component/jb-pin-input/dist/JBPinInput.js",
    external: [],
    umdName: "JBPinInput",
  },
  {
    name: "bank-indicator",
    path: "/web-component/jb-payment-input/bank-indicator/lib/bank-indicator.ts",
    outputPath:
      "/web-component/jb-payment-input//bank-indicator/dist/bank-indicator.js",
    umdName: "BankIndicator",
    external: [],
    globals: {},
    tsconfigPath:"web-component/jb-payment-input/tsconfig.json"
  },
  {
    name: "jb-payment-input",
    path: "/web-component/jb-payment-input/lib/jb-payment-input.ts",
    outputPath: "/web-component/jb-payment-input/dist/jb-payment-input.js",
    umdName: "JBPaymentInput",
    external: ["jb-input","jb-validation"],
    globals: {
      "jb-input": "JBInput",
      "jb-validation":"JBValidation"
    },
  },
  {
    name: "jb-mobile-input",
    path: "/web-component/jb-mobile-input/lib/jb-mobile-input.ts",
    outputPath: "/web-component/jb-mobile-input/dist/jb-mobile-input.js",
    umdName: "JBMobileInput",
    external: ["jb-input","jb-validation"],
    globals: {
      "jb-input": "JBInput",
      "jb-validation":"JBValidation"
    },
  },
  {
    name: "jb-number-input",
    path: "/web-component/jb-number-input/lib/jb-number-input.ts",
    outputPath: "/web-component/jb-number-input/dist/jb-number-input.js",
    umdName: "JBNumberInput",
    external: ["jb-input","jb-validation"],
    globals: {
      "jb-input": "JBInput",
      "jb-validation":"JBValidation"
    },
  },
  {
    name: "jb-national-input",
    path: "/web-component/jb-national-input/lib/jb-national-input.ts",
    outputPath: "/web-component/jb-national-input/dist/jb-national-input.js",
    umdName: "JBNationalInput",
    external: ["jb-input","jb-validation"],
    globals: {
      "jb-input": "JBInput",
      "jb-validation":"JBValidation"
    },
  },
  {
    name: "jb-password-input",
    path: "/web-component/jb-password-input/lib/jb-password-input.ts",
    outputPath: "/web-component/jb-password-input/dist/jb-password-input.js",
    umdName: "JBPasswordInput",
    external: ["jb-input","jb-validation"],
    globals: {
      "jb-input": "JBInput",
      "jb-validation":"JBValidation"
    },
  },
  {
    name: "jb-modal",
    path: "/web-component/jb-modal/lib/JBModal.ts",
    outputPath: "/web-component/jb-modal/dist/JBModal.js",
    umdName: "JBModal",
  },
  {
    name: "jb-tooltip",
    path: "/web-component/jb-tooltip/lib/jb-tooltip.ts",
    outputPath: "/web-component/jb-tooltip/dist/jb-tooltip.js",
    umdName: "JBTooltip",
  },
  {
    name: "jb-notification",
    path: "/web-component/jb-notification/lib/jb-notification.ts",
    outputPath: "/web-component/jb-notification/dist/jb-notification.js",
    umdName: "JBNotification",
  },
  {
    name: "jb-notification-wrapper",
    path: "/web-component/jb-notification/lib/wrapper/jb-notification-wrapper.ts",
    outputPath:
      "/web-component/jb-notification/dist/wrapper/jb-notification-wrapper.js",
    umdName: "JBNotificationWrapper",
    tsconfigPath:"web-component/jb-notification/tsconfig.json"
  },
  {
    name: "jb-infinite-scroll",
    path: "/web-component/jb-infinite-scroll/lib/jb-infinite-scroll.ts",
    outputPath: "/web-component/jb-infinite-scroll/dist/jb-infinite-scroll.js",
    umdName: "JBInfiniteScroll",
    external: ["jb-loading"],
    globals: {
      "jb-loading": "JBLoading",
    },
  },
  {
    name: "jb-qrcode",
    path: "/web-component/jb-qrcode/lib/JBQrcode.ts",
    outputPath: "/web-component/jb-qrcode/dist/JBQrcode.js",
    umdName: "JBQrcode",
    external: ["qrcode"],
    globals: {
      qrcode: "QRCode",
    },
  },
  {
    name: "jb-switch",
    path: "/web-component/jb-switch/lib/jb-switch.ts",
    outputPath: "/web-component/jb-switch/dist/jb-switch.js",
    external: ['jb-validation','jb-form'],
    globals: {
      'jb-validation': "JBValidation",
      'jb-form':"JBForm"
    },
    umdName: "JBSwitch",
  },
  {
    name:"jb-form",
    path:"/web-component/jb-form/lib/jb-form.ts",
    outputPath:"/web-component/jb-form/dist/jb-form.js",
    umdName:"JBForm",
    external:["jb-validation"],
    globals: {
      'jb-validation': "JBValidation",
    },
  }
];
const reactComponentList: ReactComponentBuildConfig[] = [
  {
    name: "jb-input-react",
    path: "/web-component/jb-input//react/lib/JBInput.tsx",
    outputPath: "/web-component/jb-input/react/dist/JBInput.js",
    external: ["jb-input", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-select-react",
    path: "/react-component/jb-select/lib/JBSelect.tsx",
    outputPath: "/react-component/jb-select/dist/JBSelect.js",
    external: ["jb-select", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-button-react",
    path: "/react-component/jb-button/lib/JBButton.tsx",
    outputPath: "/react-component/jb-button/dist/JBButton.js",
    external: ["jb-button", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-calendar-react",
    path: "/react-component/jb-calendar/lib/JBCalendar.tsx",
    outputPath: "/react-component/jb-calendar/dist/JBCalendar.js",
    external: ["jb-calendar", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-checkbox-react",
    path: "/react-component/jb-checkbox/lib/JBCheckbox.tsx",
    outputPath: "/react-component/jb-checkbox/dist/JBCheckbox.js",
    external: ["prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-switch-react",
    path: "/react-component/jb-switch/lib/JBSwitch.tsx",
    outputPath: "/react-component/jb-switch/dist/JBSwitch.js",
    external: ["prop-types", "react", "jb-switch"],
    globals: {
      react: "React",
      "jb-switch": "JBSwitch",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-searchbar-react",
    path: "/react-component/jb-searchbar/lib/JBSearchbar.tsx",
    outputPath: "/react-component/jb-searchbar/dist/JBSearchbar.js",
    external: ["prop-types", "react", "jb-input", "jb-select", "jb-date-input"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-image-input-react",
    path: "/react-component/jb-image-input/lib/JBImageInput.tsx",
    outputPath: "/react-component/jb-image-input/dist/JBImageInput.js",
    external: ["prop-types", "react", "jb-image-input", "jb-image-input/types"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-grid",
    path: "/react-component/jb-grid/lib/JBGrid.tsx",
    outputPath: "/react-component/jb-grid/dist/JBGrid.js",
    external: ["mobx-react", "react", "mobx", "prop-types", "jb-searchbar"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
      mobx: "MobX",
      "mobx-react": "mobxReact",
    },
  },
  // {
  //     name: 'jb-grid-row',
  //     path: '/react-component/jb-grid/lib/Components/Row.js',
  //     outputPath:'/react-component/jb-grid/dist/Components/Row.js',
  //     external:['react','prop-types'],
  //     globals:{
  //         'react':'React',
  //         'prop-types':'PropTypes'
  //     }
  // },
  // {
  //     name: 'jb-grid-expand-row',
  //     path: '/react-component/jb-grid/lib/Components/ExpandRow.js',
  //     outputPath:'/react-component/jb-grid/dist/Components/ExpandRow.js',
  //     external:['react','prop-types'],
  //     globals:{
  //         'react':'React',
  //         'prop-types':'PropTypes'
  //     }
  // },
  // {
  //     name: 'jb-grid-cell',
  //     path: '/react-component/jb-grid/lib/Components/Cell.js',
  //     outputPath:'/react-component/jb-grid/dist/Components/Cell.js',
  //     external:['react','prop-types'],
  //     globals:{
  //         'react':'React',
  //         'prop-types':'PropTypes'
  //     }
  // },
  {
    name: "jb-time-input-react",
    path: "/react-component/jb-time-input/lib/JBTimeInput.tsx",
    outputPath: "/react-component/jb-time-input/dist/JBTimeInput.js",
    external: ["react", "prop-types", "jb-time-input"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-date-input-react",
    path: "/react-component/jb-date-input/lib/JBDateInput.tsx",
    outputPath: "/react-component/jb-date-input/dist/JBDateInput.js",
    external: ["react", "prop-types", "jb-date-input", "jb-validation"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
      "jb-date-input": "JBDateInput",
      "jb-validation":"JBValidation",
    },
  },
  {
    name: "jb-textarea-react",
    path: "/react-component/jb-textarea/lib/JBTextarea.tsx",
    outputPath: "/react-component/jb-textarea/dist/JBTextarea.js",
    external: ["react", "prop-types", "jb-textarea", "jb-validation"],
    globals: {
      react: "React",
      "jb-textarea": "JBTextarea",
      "jb-validation":"JBValidation"
    },
  },
  // {
  //     name: 'jb-select-react',
  //     path: '/react-component/jb-select/lib/JBSelect.tsx',
  //     outputPath:'/react-component/jb-select/dist/JBSelect.js',
  //     external:[ 'jb-select', 'prop-types', 'react'],
  //     globals:{
  //         'react':'React',
  //         'prop-types':'PropTypes',
  //     }
  // },
  {
    name: "jb-payment-input-react",
    path: "/react-component/jb-payment-input/lib/JBPaymentInput.tsx",
    outputPath: "/react-component/jb-payment-input/dist/JBPaymentInput.js",
    external: ["jb-payment-input","jb-input-react", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
      "jb-input-react":"JBInputReact",
      "jb-payment-input":"JBPaymentInput"
    },
  },
  {
    name: "bank-indicator-react",
    path: "/react-component/jb-payment-input/bank-indicator/lib/BankIndicator.tsx",
    outputPath: "/react-component/jb-payment-input/bank-indicator/dist/BankIndicator.js",
    external: ["jb-payment-input",'jb-payment-input/bank-indicator', "prop-types", "react"],
    tsconfigPath:"react-component/jb-payment-input/tsconfig.json",
    globals: {
      react: "React",
      "prop-types": "PropTypes",
      "jb-payment-input":"JBPaymentInput"
    },
  },
  {
    name: "jb-password-input-react",
    path: "/react-component/jb-password-input/lib/JBPasswordInput.tsx",
    outputPath: "/react-component/jb-password-input/dist/JBPasswordInput.js",
    external: ["jb-password-input","jb-input-react", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
      "jb-input-react":"JBInputReact"
    },
  },
  {
    name: "jb-mobile-input-react",
    path: "/web-component/jb-mobile-input/react/lib/JBMobileInput.tsx",
    outputPath: "/web-component/jb-mobile-input/react/dist/JBMobileInput.js",
    external: ["jb-input", "jb-mobile-input", "prop-types", "react"],
    globals: {
      react: "React",
      "jb-input":"JBInput"
    },
  },
  {
    name: "jb-national-input-react",
    path: "/react-component/jb-national-input/lib/JBNationalInput.tsx",
    outputPath: "/react-component/jb-national-input/dist/JBNationalInput.js",
    external: ["jb-national-input","jb-input-react","jb-input", "prop-types", "react"],
    globals: {
      "react": "React",
      "jb-input-react":"JBInputReact",
      "jb-national-input":"JBNationalInput"
    },
  },
  {
    name: "jb-number-input-react",
    path: "/web-component/jb-number-input/react/lib/JBNumberInput.tsx",
    outputPath: "/web-component/jb-number-input/react/dist/JBNumberInput.js",
    external: ["jb-number-input","jb-input/react", "jb-input", "react"],
    globals: {
      react: "React",
      "jb-number-input":"JBNumberInput",
      "jb-input":"JBInput",
      "jb-input/react":"JBInputReact"
    },
  },
  {
    name: "jb-modal-react",
    path: "/react-component/jb-modal/lib/JBModal.tsx",
    outputPath: "/react-component/jb-modal/dist/JBModal.js",
    external: ["jb-modal", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-infinite-scroll-react",
    path: "/react-component/jb-infinite-scroll/lib/JBInfiniteScroll.tsx",
    outputPath: "/react-component/jb-infinite-scroll/dist/JBInfiniteScroll.js",
    external: ["jb-infinite-scroll", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-pin-input-react",
    path: "/react-component/jb-pin-input/lib/JBPinInput.tsx",
    outputPath: "/react-component/jb-pin-input/dist/JBPinInput.js",
    external: ["jb-pin-input", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-loading-react",
    path: "/react-component/jb-loading/lib/JBLoading.tsx",
    outputPath: "/react-component/jb-loading/dist/JBLoading.js",
    external: ["jb-loading", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-form-react",
    path: "/web-component/jb-form/react/lib/JBForm.tsx",
    outputPath: "/web-component/jb-form/react/dist/JBForm.js",
    external: ["jb-form", "react"],
    globals: {
      react: "React",
      'jb-form': "JBForm",
      "prop-types": "PropTypes",
    },
  },
  {
    name: "jb-file-input-react",
    path: "/react-component/jb-file-input/lib/JBFileInput.tsx",
    outputPath: "/react-component/jb-file-input/dist/JBFileInput.js",
    external: ["jb-file-input", "prop-types", "react"],
    globals: {
      react: "React",
      "prop-types": "PropTypes",
    },
  },
];
export { webComponentList, reactComponentList };
