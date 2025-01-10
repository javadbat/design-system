import React, {useRef} from 'react';
import {JBPinInput} from 'jb-pin-input/react';
import {JBPinInputStyleTest} from './pages/JBPinInput/JBPinInputStyleTest';
export default {
  title: 'Example/JBPinInput',
  component: JBPinInput
};

const Template = (args) => <JBPinInput { ...args}></JBPinInput>;
export const Normal = Template.bind({});
Normal.args = {
  label:'pin input',
  message:"please fill the pin",
  value:"",
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  label:'autofocus',
  autofocus:true,
  value:"",
};

export const charLength = Template.bind({});
charLength.args = {
  label:'8 digit pin',
  value:"",
  charLength:8
};
export const Required = Template.bind({});
Required.args = {
  label:'required',
  required:true
};
export const WithValidation = {
  render:
    (args) => {
      const ref = useRef(null);
      const validationList = [
        {
          validator:(value)=>{
            return value.startsWith("1");
          },
          message:"pin input must be start with 1"
        }
      ];
      return (
        <div ref={ref}>
          <JBPinInput {...args} ref={ref} validationList={validationList} onComplete={(e)=>console.log("complete",e)} required onChange={()=>{console.log("change")}} />
        </div>
      );
    },
};
WithValidation.args = {
  label: "will jump on overflow",
  overflowHandler: "SLIDE",
};
const PinInputStyleTemplate = () => <JBPinInputStyleTest></JBPinInputStyleTest>;
export const PinInputStyle = PinInputStyleTemplate.bind({});
