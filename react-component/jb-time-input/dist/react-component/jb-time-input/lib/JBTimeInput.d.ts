import React from 'react';
import 'jb-time-input';
import { JBTimeInputWebComponent } from 'jb-time-input';
import { ValidationItem } from 'jb-validation/types';
import { JBTimeInputValidationValue, TimeUnits } from 'jb-time-input/types';
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
declare const JBTimeInput: React.ForwardRefExoticComponent<JBTimeInputProps & React.RefAttributes<unknown>>;
export type JBTimeInputEventType<T> = T & {
    target: JBTimeInputWebComponent;
};
export type JBTimeInputProps = {
    label?: string | null;
    closeButtonText?: string | null;
    value?: string | null;
    onChange?: (e: JBTimeInputEventType<Event>) => void;
    onKeyUp?: (e: JBTimeInputEventType<KeyboardEvent>) => void;
    onKeyDown?: (e: JBTimeInputEventType<KeyboardEvent>) => void;
    onKeyPress?: (e: JBTimeInputEventType<KeyboardEvent>) => void;
    onEnter?: (e: JBTimeInputEventType<KeyboardEvent>) => void;
    onInput?: (e: JBTimeInputEventType<InputEvent>) => void;
    onBeforeInput?: (e: JBTimeInputEventType<InputEvent>) => void;
    onFocus: (e: JBTimeInputEventType<FocusEvent>) => void;
    onBlur: (e: JBTimeInputEventType<FocusEvent>) => void;
    className: string;
    placeholder: string;
    message: string;
    direction: 'ltr' | 'rtl';
    validationList: ValidationItem<JBTimeInputValidationValue>[];
    secondEnabled: boolean;
    frontalZero: boolean;
    optionalUnits: TimeUnits[];
    showPersianNumber: true;
};
export default JBTimeInput;
