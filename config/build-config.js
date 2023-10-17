var webComponentConfig = {
    webComponents: [
        {
            name: 'jb-input',
            path: '/web-component/jb-input/lib/JBInput.ts',
            outputPath: '/web-component/jb-input/dist/JBInput.js',
            umdName:'JBDateInput'
        },
        {
            name: 'jb-button',
            path: '/web-component/jb-button/lib/JBButton.ts',
            outputPath: '/web-component/jb-button/dist/JBButton.js',
            external:[],
            umdName:'JBButton'
        },
        {
            name: 'jb-calendar',
            path: '/web-component/jb-calendar/lib/JBCalendar.ts',
            outputPath: '/web-component/jb-calendar/dist/JBCalendar.js',
            external: ['date-fns', 'date-fns-jalali'],
            umdName:'JBCalendar',
            //becuase date-fns dont have any umd module export i have to do this so it doenst exclude in umd build
            umdIncludes:['date-fns', 'date-fns-jalali']
        },
        {
            name: 'jb-date-input',
            path: '/web-component/jb-date-input/lib/JBDateInput.ts',
            outputPath: '/web-component/jb-date-input/dist/JBDateInput.js',
            umdName:'JBDateInput',
            external: ['date-fns', 'date-fns-jalali', 'jb-calendar'],
            //becuase date-fns dont have any umd module export i have to do this so it doenst exclude in umd build
            umdIncludes:['date-fns', 'date-fns-jalali', 'jb-calendar',]
        },
        {
            name: 'jb-file-input',
            path: '/web-component/jb-file-input/lib/jb-file-input.ts',
            outputPath: '/web-component/jb-file-input/dist/jb-file-input.js',
            umdName:'JBFileInput',
        },
        {
            name: 'jb-image-input',
            path: '/web-component/jb-image-input/lib/JBImageInput.ts',
            outputPath: '/web-component/jb-image-input/dist/JBImageInput.js',
            umdName:'JBDateImageInput',
        },
        {
            name: 'jb-select',
            path: '/web-component/jb-select/lib/JBSelect.ts',
            outputPath: '/web-component/jb-select/dist/JBSelect.js',
            umdName:'JBSelect',
        },
        {
            name: 'jb-textarea',
            path: '/web-component/jb-textarea/lib/JBTextarea.ts',
            outputPath: '/web-component/jb-textarea/dist/JBTextarea.js',
            umdName:'JBTextarea',
        },
        {
            name: 'jb-message',
            path: '/modules/jb-message/lib/JBMessage.ts',
            outputPath: '/modules/jb-message/dist/JBMessage.js',
            umdName:'JBMessage',
        },
        {
            name: 'jb-searchbar',
            path: '/web-component/jb-searchbar/lib/JBSearchbar.js',
            outputPath:'/web-component/jb-searchbar/dist/JBSearchbar.js',
            external: ['jb-input', 'jb-select', 'jb-date-input'],
            umdName:'JBSearchbar',
            globals:{
                'jb-input':'JBInput',
                'jb-select':'JBSelect',
                'jb-date-input':"JBDateInput"
            }
        },
        {
            name: 'jb-editor',
            path: '/web-component/jb-editor/lib/JBEditor.js',
            outputPath:'/web-component/jb-editor/dist/JBEditor.js',
            external: [],
            umdName:'JBEditor',
        },
        {
            name: 'jb-time-input',
            path: '/web-component/jb-time-input/lib/JBTimeInput.ts',
            outputPath:'/web-component/jb-time-input/dist/JBTimeInput.js',
            external: ['jb-time-picker'],
            umdName:'JBTimeInput',
            globals:{
                'jb-time-picker':'JBTimePicker',
            }
        },
        {
            name: 'jb-time-picker',
            path: '/web-component/jb-time-picker/lib/JBTimePicker.ts',
            outputPath:'/web-component/jb-time-picker/dist/JBTimePicker.js',
            external: [],
            umdName:'JBTimePicker',
        },
        {
            name: 'jb-loading',
            path: '/web-component/jb-loading/lib/JBLoading.js',
            outputPath:'/web-component/jb-loading/dist/JBLoading.js',
            external: [],
            umdName:'JBLoading',
        },
        {
            name: 'jb-pin-input',
            path: '/web-component/jb-pin-input/lib/JBPinInput.ts',
            outputPath:'/web-component/jb-pin-input/dist/JBPinInput.js',
            external: [],
            umdName:'JBPinInput',
        },
        {
            name: 'jb-payment-input',
            path: '/web-component/jb-payment-input/lib/JBPaymentInput.ts',
            outputPath: '/web-component/jb-payment-input/dist/JBPaymentInput.js',
            umdName:'JBPaymentInput',
            external: ['jb-input'],
            globals:{
                'jb-input':'JBInput',
            }
        },
        {
            name: 'bank-indicator',
            path: '/web-component/jb-payment-input/lib/bank-indicator/bank-indicator.ts',
            outputPath: '/web-component/jb-payment-input/dist/bank-indicator/bank-indicator.js',
            umdName:'BankIndicator',
            external: [],
            globals:{
            }
        },
        {
            name: 'jb-mobile-input',
            path: '/web-component/jb-mobile-input/lib/jb-mobile-input.ts',
            outputPath: '/web-component/jb-mobile-input/dist/jb-mobile-input.js',
            umdName:'JBMobileInput',
            external: ['jb-input'],
            globals:{
                'jb-input':'JBInput',
            }
        },
        {
            name: 'jb-modal',
            path: '/web-component/jb-modal/lib/JBModal.ts',
            outputPath: '/web-component/jb-modal/dist/JBModal.js',
            umdName:'JBModal',
        },
        {
            name: 'jb-tooltip',
            path: '/web-component/jb-tooltip/lib/jb-tooltip.ts',
            outputPath: '/web-component/jb-tooltip/dist/jb-tooltip.js',
            umdName:'JBTooltip'
        },
        {
            name: 'jb-notification',
            path: '/web-component/jb-notification/lib/jb-notification.ts',
            outputPath: '/web-component/jb-notification/dist/jb-notification.js',
            umdName:'JBNotification'
        },
        {
            name: 'jb-notification-wrapper',
            path: '/web-component/jb-notification/lib/wrapper/jb-notification-wrapper.ts',
            outputPath: '/web-component/jb-notification/dist/wrapper/jb-notification-wrapper.js',
            umdName:'JBNotificationWrapper'
        },
        {
            name: 'jb-infinite-scroll',
            path: '/web-component/jb-infinite-scroll/lib/jb-infinite-scroll.ts',
            outputPath: '/web-component/jb-infinite-scroll/dist/jb-infinite-scroll.js',
            umdName:'JBInfiniteScroll',
            external: ['jb-loading'],
            globals:{
                'jb-loading':'JBLoading',
            }
        },
        {
            name: 'jb-qrcode',
            path: '/web-component/jb-qrcode/lib/JBQrcode.ts',
            outputPath: '/web-component/jb-qrcode/dist/JBQrcode.js',
            umdName:'JBQrcode',
            external: ['qrcode'],
            globals:{
                'qrcode':'QRCode',
            }
        },
        

    ],
};
const reactComponentConfig = {
    reactComponents: [
        {
            name: 'jb-input-react',
            path: '/react-component/jb-input/lib/JBInput.tsx',
            outputPath: '/react-component/jb-input/dist/JBInput.js',
            external: ['jb-input', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-select-react',
            path: '/react-component/jb-select/lib/JBSelect.tsx',
            outputPath: '/react-component/jb-select/dist/JBSelect.js',
            external: ['jb-select', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-button-react',
            path: '/react-component/jb-button/lib/JBButton.tsx',
            outputPath: '/react-component/jb-button/dist/JBButton.js',
            external: ['jb-button', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-calendar-react',
            path: '/react-component/jb-calendar/lib/JBCalendar.js',
            outputPath: '/react-component/jb-calendar/dist/JBCalendar.js',
            external: ['jb-calendar', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-checkbox-react',
            path: '/react-component/jb-checkbox/lib/JBCheckbox.js',
            outputPath: '/react-component/jb-checkbox/dist/JBCheckbox.js',
            external: ['prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-switch-react',
            path: '/react-component/jb-switch/lib/JBSwitch.js',
            outputPath: '/react-component/jb-switch/dist/JBSwitch.js',
            external: ['prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-searchbar-react',
            path: '/react-component/jb-searchbar/lib/JBSearchbar.js',
            outputPath: '/react-component/jb-searchbar/dist/JBSearchbar.js',
            external: ['prop-types', 'react', 'jb-input', 'jb-select', 'jb-date-input'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-grid',
            path: '/react-component/jb-grid/lib/JBGrid.js',
            outputPath:'/react-component/jb-grid/dist/JBGrid.js',
            external:['mobx-react', 'react', 'mobx', 'prop-types', 'jb-searchbar'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
                'mobx':'MobX',
                'mobx-react':'mobxReact'
            }
        },
        {
            name: 'jb-grid-row',
            path: '/react-component/jb-grid/lib/Components/Row.js',
            outputPath:'/react-component/jb-grid/dist/Components/Row.js',
            external:['react','prop-types'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-grid-expand-row',
            path: '/react-component/jb-grid/lib/Components/ExpandRow.js',
            outputPath:'/react-component/jb-grid/dist/Components/ExpandRow.js',
            external:['react','prop-types'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-grid-cell',
            path: '/react-component/jb-grid/lib/Components/Cell.js',
            outputPath:'/react-component/jb-grid/dist/Components/Cell.js',
            external:['react','prop-types'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-time-input-react',
            path: '/react-component/jb-time-input/lib/JBTimeInput.js',
            outputPath:'/react-component/jb-time-input/dist/JBTimeInput.js',
            external:[ 'react', 'prop-types', 'jb-time-input'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        },
        {
            name: 'jb-date-input-react',
            path: '/react-component/jb-date-input/lib/JBDateInput.tsx',
            outputPath:'/react-component/jb-date-input/dist/JBDateInput.js',
            external:[ 'react', 'prop-types', 'jb-date-input'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
                'jb-date-input':'JBDateInput'
            }
        },
        {
            name: 'jb-textarea-react',
            path: '/react-component/jb-textarea/lib/JBTextArea.tsx',
            outputPath:'/react-component/jb-textarea/dist/JBTextArea.js',
            external:[ 'react', 'prop-types', 'jb-textarea'],
            globals:{
                'react':'React',
                'jb-textarea':'JBTextarea'
            }
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
            name: 'jb-payment-input-react',
            path: '/react-component/jb-payment-input/lib/JBPaymentInput.js',
            outputPath:'/react-component/jb-payment-input/dist/JBPaymentInput.js',
            external:[ 'jb-payment-input', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        },
        {
            name: 'jb-mobile-input-react',
            path: '/react-component/jb-mobile-input/lib/JBMobileInput.js',
            outputPath:'/react-component/jb-mobile-input/dist/JBMobileInput.js',
            external:[ 'jb-mobile-input', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        },
        {
            name: 'jb-national-input-react',
            path: '/react-component/jb-national-input/lib/JBNationalInput.js',
            outputPath:'/react-component/jb-national-input/dist/JBNationalInput.js',
            external:[ 'jb-national-input', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        },
        {
            name: 'jb-modal-react',
            path: '/react-component/jb-modal/lib/JBModal.tsx',
            outputPath:'/react-component/jb-modal/dist/JBModal.js',
            external:[ 'jb-modal', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        },
        {
            name: 'jb-infinite-scroll-react',
            path: '/react-component/jb-infinite-scroll/lib/JBInfiniteScroll.js',
            outputPath:'/react-component/jb-infinite-scroll/dist/JBInfiniteScroll.js',
            external:[ 'jb-infinite-scroll', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        },
        {
            name: 'jb-pin-input-react',
            path: '/react-component/jb-pin-input/lib/JBPinInput.tsx',
            outputPath:'/react-component/jb-pin-input/dist/JBPinInput.js',
            external:[ 'jb-pin-input', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        },
        {
            name: 'jb-loading-react',
            path: '/react-component/jb-loading/lib/JBLoading.tsx',
            outputPath:'/react-component/jb-loading/dist/JBLoading.js',
            external:[ 'jb-loading', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        },
        {
            name: 'jb-file-input-react',
            path: '/react-component/jb-file-input/lib/JBFileInput.tsx',
            outputPath:'/react-component/jb-file-input/dist/JBFileInput.js',
            external:[ 'jb-file-input', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        }
    ]
};
export { webComponentConfig , reactComponentConfig };