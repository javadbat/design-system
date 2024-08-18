import React, {useRef, useEffect, useImperativeHandle, useState} from 'react';
import 'jb-time-input';
// eslint-disable-next-line no-duplicate-imports
import {JBTimeInputWebComponent} from 'jb-time-input';
import {useEvent} from '../../../common/hooks/use-event';
import { type ValidationItem } from 'jb-validation/types';
import { type JBTimeInputValidationValue, type TimeUnits } from 'jb-time-input/types';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'jb-time-input': JBTimeInputType;
    }
    interface JBTimeInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBTimeInputWebComponent>, JBTimeInputWebComponent> {
      "class"?: string,
      "type"?: string,
      "label"?:string,
      "message"?:string,
      "placeholder"?:string,
    }
  }
}
// eslint-disable-next-line react/display-name
const JBTimeInput = React.forwardRef((props:JBTimeInputProps, ref)=>{
  const element = useRef<JBTimeInputWebComponent>(null);
  const [refChangeCount, refChangeCountSetter] = useState(0);
  useImperativeHandle(
    ref,
    () => (element?element.current:{}),
    [element],
  );
  useEffect(() => {
    refChangeCountSetter(refChangeCount + 1);
  }, [element.current]);
  function onChange(e:JBTimeInputEventType<Event>) {
    if (typeof props.onChange == "function") {
      props.onChange(e);
    }
  }
  function onKeydown(e:JBTimeInputEventType<KeyboardEvent>) {
    if (typeof props.onKeyDown == "function") {
      props.onKeyDown(e);
    }
  }
  function onKeyup(e:JBTimeInputEventType<KeyboardEvent>) {
    if (typeof props.onKeyUp == "function") {
      props.onKeyUp(e);
    }
  }
  function onKeyPress(e:JBTimeInputEventType<KeyboardEvent>) {
    if (typeof props.onKeyPress == "function") {
      props.onKeyPress(e);
    }
  }
  function onEnter(e:JBTimeInputEventType<KeyboardEvent>) {
    if (typeof props.onEnter == "function") {
      props.onEnter(e);
    }
  }
  function onInput(e:JBTimeInputEventType<InputEvent>) {
    if (typeof props.onInput == "function") {
      props.onInput(e);
    }
  }
  function onBeforeinput(e:JBTimeInputEventType<InputEvent>) {
    if ( typeof props.onInput == "function") {
      props.onInput(e);
    }
  }
  function onFocus(e:JBTimeInputEventType<FocusEvent>) {
    if (props.onFocus && e instanceof FocusEvent) {
      props.onFocus(e);
    }
  }
  function onBlur(e:JBTimeInputEventType<FocusEvent>) {
    if (props.onBlur && e instanceof FocusEvent) {
      props.onBlur(e);
    }
  }
  useEffect(() => {
    let value = props.value;
    if(props.value == null || props.value === undefined){
      value = '00:00:00';
    }
    element.current.value = value;
  }, [props.value]);
  useEffect(()=>{
    element.current?.setAttribute('direction',props.direction);
  },[props.direction]);
  useEffect(()=>{
    if(Array.isArray( props.validationList) && element.current){
      element.current.validation.list = props.validationList;
    }
  },[props.validationList]);
  useEffect(()=>{
    if(element.current,props.secondEnabled !== null && props.secondEnabled !== undefined){
      element.current.secondEnabled = props.secondEnabled;
    }
  },[props.secondEnabled]);
  useEffect(() => {
    if(typeof props.frontalZero == "boolean"){
      element.current.frontalZero = props.frontalZero;
    }
  }, [props.frontalZero]);
  useEffect(() => {
    if(Array.isArray(props.optionalUnits)){
      element.current.optionalUnits = props.optionalUnits;
    }
  }, [props.optionalUnits]);
  useEffect(() => {
    if(props.showPersianNumber !== null && props.showPersianNumber !== undefined){
      element.current.showPersianNumber = props.showPersianNumber;
    }
  }, [props.showPersianNumber]);
  useEvent(element.current, 'change', onChange);
  useEvent(element.current, 'keydown', onKeydown);
  useEvent(element.current, 'keypress', onKeyPress);
  useEvent(element.current, 'keyup', onKeyup);
  useEvent(element.current, 'focus', onFocus);
  useEvent(element.current, 'blur', onBlur);
  useEvent(element.current, 'input', onInput);
  useEvent(element.current, 'beforeinput', onBeforeinput);
  useEvent(element.current, 'enter', onEnter);
  return (
    <jb-time-input placeholder={props.placeholder} ref={element} class={props.className} label={props.label} message={props.message} close-button-text={props.closeButtonText}></jb-time-input>
  );
});

export type JBTimeInputEventType<T> = T & {
  target: JBTimeInputWebComponent
}

export type JBTimeInputProps = {
  label?: string | null,
  closeButtonText?: string | null,
  value?: string | null,
  onChange?: (e: JBTimeInputEventType<Event>) => void,
  onKeyUp?: (e: JBTimeInputEventType<KeyboardEvent>) => void,
  onKeyDown?: (e: JBTimeInputEventType<KeyboardEvent>) => void,
  onKeyPress?: (e: JBTimeInputEventType<KeyboardEvent>) => void,
  onEnter?: (e: JBTimeInputEventType<KeyboardEvent>) => void,
  onInput?: (e: JBTimeInputEventType<InputEvent>) => void,
  onBeforeInput?: (e: JBTimeInputEventType<InputEvent>) => void,
  onFocus:(e: JBTimeInputEventType<FocusEvent>) => void
  onBlur:(e: JBTimeInputEventType<FocusEvent>) => void
  className: string,
  placeholder: string,
  message:string
  //TODO: remove this and handle internally
  direction: 'ltr' | 'rtl',
  validationList: ValidationItem<JBTimeInputValidationValue>[],
  secondEnabled: boolean,
  frontalZero: boolean,
  optionalUnits: TimeUnits[],
  showPersianNumber:true
}
export {JBTimeInput};

