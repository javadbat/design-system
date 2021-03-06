import React from 'react';
import JBSelect from '../../../../react-component/jb-select/JBSelect';
import './JBSelectStyleTestPage.css';
function JBSelectStyleTest (props){
    return (
        <div>
            <div className="filter-select-style-1">
                <JBSelect label={props.label}></JBSelect>
            </div>
            <div className='style-table-title-1'>JB Select Custom Style 1</div>
            <div className='style-table-content-1'>
                --jb-select-margin: 0px 2px;<br /><br />
                --jb-select-border-radius: 24px;<br /><br />
                --jb-select-border-color: royalblue;<br /><br />
                --jb-select-border-color-selected: tomato;<br /><br />
                --jb-select-bgcolor: mintcream;
            </div>
            <br /><br />
            <div className="filter-select-style-2">
                <JBSelect label={props.label}></JBSelect>
            </div>
            <div className='style-table-title-2'>JB Select Custom Style 2</div>
            <div className='style-table-content-2'>
                --jb-select-margin: 0px 4px;<br /><br />
                --jb-select-border-radius: 0px;<br /><br />
                --jb-select-border-color: rgb(26, 23, 23);<br /><br />
                --jb-select-border-color-selected: rgb(30, 29, 43);<br /><br />
                --jb-select-bgcolor: lightgray;
            </div>
        </div>
    );
}
export default JBSelectStyleTest;