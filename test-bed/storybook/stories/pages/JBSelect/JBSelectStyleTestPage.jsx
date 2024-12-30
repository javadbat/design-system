import React from 'react';
import {JBSelect, JBOptionList} from 'jb-select/react';
import './JBSelectStyleTestPage.css';
function JBSelectStyleTest (props){
  const options = ["1","2","3"];
  return (
    <div>
      <div className="filter-select-style-1">
        <JBSelect label={props.label}><JBOptionList optionList={options} /></JBSelect>
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
        <JBSelect label={props.label}><JBOptionList optionList={options} /></JBSelect>
      </div>
      <div className='style-table-title-2'>JB Select Custom Style 2</div>
      <div className='style-table-content-2'>
                --jb-select-margin: 0px 4px;<br /><br />
                --jb-select-border-radius: 0px;<br /><br />
                --jb-select-border-color: rgb(26, 23, 23);<br /><br />
                --jb-select-border-color-selected: rgb(30, 29, 43);<br /><br />
                --jb-select-bgcolor-selected: rgb(195, 57, 230);<br /><br />
                --jb-select-bgcolor: lightgray;<br /><br />
                --jb-select-mobile-search-input-height: 64px;<br /><br />
                --jb-select-border-bottom-width:1px;<br /><br />
                --jb-select-mobile-item-list-border-radius:16px;
      </div>
      <br /><br />
      <div className="self-style-wrapper">
        <JBSelect className="self-style-select" label="self style" message="this select get classname itself and style are not set to parent element"><JBOptionList optionList={options} /></JBSelect>
      </div>
      <div className='style-table-title-2'>JB Select Custom Style 2</div>
      <div className='style-table-content-2'>
                --jb-select-margin: 0px 4px;<br /><br />
                --jb-select-border-radius: 0px;<br /><br />
                --jb-select-border-color: rgb(26, 23, 23);<br /><br />
                --jb-select-border-color-selected: rgb(30, 29, 43);<br /><br />
                --jb-select-bgcolor-selected: rgb(195, 57, 230);<br /><br />
                --jb-select-bgcolor: lightgray;
      </div>
      <br /><br />
      <div className="with-divider-line">
        <JBSelect className="self-style-select" label="self style" message="this select get classname itself and style are not set to parent element"><JBOptionList optionList={options} /></JBSelect>
      </div>
      <div className='style-table-title-2'>JB Select Custom Style 3</div>
      <div className='style-table-content-2'>
                --jb-select-margin: 0px 4px;<br /><br />
                --jb-select-border-radius: 0px;<br /><br />
                --jb-select-border-color: rgb(26, 23, 23);<br /><br />
                --jb-select-border-color-selected: rgb(30, 29, 43);<br /><br />
                --jb-select-bgcolor-selected: rgb(195, 57, 230);<br /><br />
                --jb-select-bgcolor: lightgray;
      </div>
    </div>
  );
}
export default JBSelectStyleTest;