export type ValidationResultSummary = {
    isValid: boolean | null;
    message: string | null;
};
export type ValidationResultItem = {
    isValid: boolean | null;
    message: string | null;
    validation: ValidationItem;
};
export type ValidationResult = {
    validationList: ValidationResultItem[];
    isAllValid: boolean;
};
export type ValidationItem<TValue = string> = {
    validator: RegExp | ((value: TValue) => boolean);
    message: string;
};
export type ShowValidationErrorCallback = (message: string) => void;
export type ClearValidationErrorCallback = () => void;
export type GetInputtedTextCallback = () => string;
