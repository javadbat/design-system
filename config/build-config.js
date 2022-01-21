var webComponentConfig = {
    webComponents: [
        {
            name: 'jb-input',
            path: '/web-component/jb-input/lib/JBInput.ts',
            outputPath: '/web-component/jb-input/dist/JBInput.js'
        },
        {
            name: 'jb-button',
            path: '/web-component/jb-button/lib/JBButton.ts',
            outputPath: '/web-component/jb-button/dist/JBButton.js',
            external:[]
        },
        {
            name: 'jb-calendar',
            path: '/web-component/jb-calendar/lib/JBCalendar.ts',
            outputPath: '/web-component/jb-calendar/dist/JBCalendar.js',
            external: ['dayjs', 'jalaliday']
        },
        {
            name: 'jb-date-input',
            path: '/web-component/jb-date-input/lib/JBDateInput.ts',
            outputPath: '/web-component/jb-date-input/dist/JBDateInput.js',
            external: ['dayjs', 'jalaliday', 'jb-calendar']
        },
        {
            name: 'jb-file-input',
            path: '/web-component/jb-file-input/lib/JBFileInput.js',
            outputPath: '/web-component/jb-file-input/dist/JBFileInput.js'
        },
        {
            name: 'jb-image-input',
            path: '/web-component/jb-image-input/lib/JBImageInput.js',
            outputPath: '/web-component/jb-image-input/dist/JBImageInput.js'
        },
        {
            name: 'jb-select',
            path: '/web-component/jb-select/lib/JBSelect.js',
            outputPath: '/web-component/jb-select/dist/JBSelect.js'
        },
        {
            name: 'jb-textarea',
            path: '/web-component/jb-textarea/lib/JBTextarea.js',
            outputPath: '/web-component/jb-textarea/dist/JBTextarea.js'
        },
        {
            name: 'jb-message',
            path: '/modules/jb-message/lib/JBMessage.js',
            outputPath: '/modules/jb-message/dist/JBMessage.js'
        },
        {
            name: 'jb-searchbar',
            path: '/web-component/jb-searchbar/lib/JBSearchbar.js',
            outputPath:'/web-component/jb-searchbar/dist/JBSearchbar.js',
            external: ['jb-input', 'jb-select', 'jb-date-input']
        },
        {
            name: 'jb-editor',
            path: '/web-component/jb-editor/lib/JBEditor.js',
            outputPath:'/web-component/jb-editor/dist/JBEditor.js',
            external: []
        },
        {
            name: 'jb-time-input',
            path: '/web-component/jb-time-input/lib/JBTimeInput.js',
            outputPath:'/web-component/jb-time-input/dist/JBTimeInput.js',
            external: ['jb-time-picker']
        },
        {
            name: 'jb-time-picker',
            path: '/web-component/jb-time-picker/lib/JBTimePicker.ts',
            outputPath:'/web-component/jb-time-picker/dist/JBTimePicker.js',
            external: []
        },
        {
            name: 'jb-loading',
            path: '/web-component/jb-loading/lib/JBLoading.js',
            outputPath:'/web-component/jb-loading/dist/JBLoading.js',
            external: []
        },

    ],
};
const reactComponentConfig = {
    reactComponents: [
        {
            name: 'jb-input-react',
            path: '/react-component/jb-input/lib/JBInput.js',
            outputPath: '/react-component/jb-input/dist/JBInput.js',
            external: ['../../../web-component/jb-input', 'prop-types', 'react'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes'
            }
        },
        {
            name: 'jb-button-react',
            path: '/react-component/jb-button/lib/JBButton.js',
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
            external: ['dayjs', 'jalaliday', 'jb-calendar', 'prop-types', 'react'],
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
            path: '/react-component/jb-date-input/lib/JBDateInput.js',
            outputPath:'/react-component/jb-date-input/dist/JBDateInput.js',
            external:[ 'react', 'prop-types', 'jb-date-input'],
            globals:{
                'react':'React',
                'prop-types':'PropTypes',
            }
        }
    ]
};
export { webComponentConfig , reactComponentConfig }