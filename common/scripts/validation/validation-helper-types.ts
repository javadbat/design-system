import { type ValidationHelper } from "./validation-helper";

//all web component that has validation will implements this interface
export interface WithValidation<TValidationValue = any> {
    readonly validation :ValidationHelper<TValidationValue>,
    showValidationError:ShowValidationErrorCallback,
    clearValidationError:ClearValidationErrorCallback,
}

export type ValidationResultSummary = {
    isValid:boolean | null;
    message:string | null;
}
export type ValidationResultItem<ValidationValue> = {
    isValid:boolean | null;
    message:string | null;
    validation:ValidationItem<ValidationValue>;
}
export type ValidationResult<ValidationValue> = {
    validationList:ValidationResultItem<ValidationValue>[];
    isAllValid:boolean;
}
//TValue will be different for some inputs like date input
export type ValidationItem<ValidationValue> = {
    validator: RegExp | ((value:ValidationValue)=>boolean|string);
    message:string;
}
export type ShowValidationErrorCallback = (message:string)=>void;
export type ClearValidationErrorCallback = ()=>void;
export type GetInputtedValueCallback<ValidationValue> = ()=>ValidationValue;
export type GetValueStringCallback<ValidationValue> = (value:ValidationValue)=>string;
export type GetInsideValidationsCallback<ValidationValue> = ()=>ValidationItem<ValidationValue>[];