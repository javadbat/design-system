import React from 'react';
import 'jb-calendar';
import { JBCalendarWebComponent } from 'jb-calendar';
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'jb-calendar': JBCalendarType;
        }
        interface JBCalendarType extends React.DetailedHTMLProps<React.HTMLAttributes<JBCalendarWebComponent>, JBCalendarWebComponent> {
            "class"?: string;
            "type"?: string;
            "label"?: string;
            "message"?: string;
            "placeholder"?: string;
        }
    }
}
declare const JBCalendar: React.ForwardRefExoticComponent<Omit<any, "ref"> & React.RefAttributes<unknown>>;
export { JBCalendar };
