var webComponentConfig = {
    webComponents: [
        {
            name: 'jb-input',
            path: '/web-component/jb-input/lib/JBInput.js',
            outputPath: '/web-component/jb-input/dist/JBInput.js'
        },
        {
            name: 'jb-button',
            path: '/web-component/jb-button/lib/JBButton.js',
            outputPath: '/web-component/jb-button/dist/JBButton.js'
        },
        {
            name: 'jb-calendar',
            path: '/web-component/jb-calendar/lib/JBCalendar.js',
            outputPath: '/web-component/jb-calendar/dist/JBCalendar.js',
            external: ['dayjs', 'jalaliday']
        },
        {
            name: 'jb-date-input',
            path: '/web-component/jb-date-input/lib/JBDateInput.js',
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
            name: 'jb-text-area',
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
        }

    ],
};
const reactComponentConfig = {
    reactComponents: [
        {
            name: 'jb-input',
            path: '/react-component/jb-input/lib/JBInput.js',
            outputPath: '/react-component/jb-input/dist/JBInput.js',
            external: ['../../../web-component/jb-input', 'prop-types', 'react']
        },
        {
            name: 'jb-button',
            path: '/react-component/jb-button/lib/JBButton.js',
            outputPath: '/react-component/jb-button/dist/JBButton.js',
            external: ['../../../web-component/jb-button/dist/JBButton', 'prop-types', 'react']
        },
        {
            name: 'jb-calendar',
            path: '/react-component/jb-calendar/lib/JBCalendar.js',
            outputPath: '/react-component/jb-calendar/dist/JBCalendar.js',
            external: ['dayjs', 'jalaliday', 'jb-calendar', 'prop-types', 'react']
        },
        {
            name: 'jb-checkbox',
            path: '/react-component/jb-checkbox/lib/JBCheckbox.js',
            outputPath: '/react-component/jb-checkbox/dist/JBCheckbox.js',
            external: ['prop-types', 'react']
        },
        {
            name: 'jb-switch',
            path: '/react-component/jb-switch/lib/JBSwitch.js',
            outputPath: '/react-component/jb-switch/dist/JBSwitch.js',
            external: ['prop-types', 'react']
        },
        {
            name: 'jb-searchbar',
            path: '/react-component/jb-searchbar/lib/JBSearchbar.js',
            outputPath: '/react-component/jb-searchbar/dist/JBSearchbar.js',
            external: ['prop-types', 'react', 'jb-input', 'jb-select', 'jb-date-input']
        },
        {
            name: 'jb-grid',
            path: '/react-component/jb-grid/lib/JBGrid.js',
            outputPath:'/react-component/jb-grid/dist/JBGrid.js',
            external:['mobx-react', 'react', 'mobx', 'prop-types', 'jb-searchbar']
        }
    ]
};
export { webComponentConfig , reactComponentConfig }