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
    validator: RegExp | ((value:ValidationValue)=>boolean);
    message:string;
}
export type ShowValidationErrorCallback = (message:string)=>void;
export type ClearValidationErrorCallback = ()=>void;
export type GetInputtedTextCallback<ValidationValue> = ()=>ValidationValue;
export type getValueStringCallback<ValidationValue> = (value:ValidationValue)=>string;