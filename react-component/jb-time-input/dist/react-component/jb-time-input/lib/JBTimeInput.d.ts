import React from 'react';
import 'jb-time-input';
import { JBTimeInputWebComponent } from 'jb-time-input';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'jb-time-input': JBTimeInputType;
        }
        interface JBTimeInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBTimeInputWebComponent>, JBTimeInputWebComponent> {
            "class"?: string;
            "type"?: string;
            "label"?: string;
            "message"?: string;
            "placeholder"?: string;
        }
    }
}
declare const JBTimeInput: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
export default JBTimeInput;
