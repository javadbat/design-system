import { ClearValidationErrorCallback, GetInputtedTextCallback, ShowValidationErrorCallback, ValidationItem, ValidationResult, ValidationResultItem, ValidationResultSummary } from "./validation-helper-types";
export declare class ValidationHelper {
    #private;
    validation?: ValidationResultSummary;
    showValidationError: ShowValidationErrorCallback | null;
    clearValidationError: ClearValidationErrorCallback | null;
    getInputText: GetInputtedTextCallback | null;
    constructor(showValidationError: ShowValidationErrorCallback, clearValidationError: ClearValidationErrorCallback, getInputText: GetInputtedTextCallback);
    get validationList(): ValidationItem[];
    set validationList(value: ValidationItem[]);
    /**
     * @description check if input validation list is fulfilled or not
     */
    checkValidity(showError?: boolean): ValidationResult;
    checkInputValidation(value: string): ValidationResult;
    checkValidation(text: string, validation: ValidationItem): ValidationResultItem;
}
