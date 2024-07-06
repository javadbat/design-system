import { ClearValidationErrorCallback, GetInputtedValueCallback, ShowValidationErrorCallback, ValidationItem, ValidationResult, ValidationResultSummary, GetValueStringCallback, GetInsideValidationsCallback } from "./validation-helper-types";
export declare class ValidationHelper<ValidationValue> {
    #private;
    get resultSummary(): ValidationResultSummary;
    result: ValidationResult<ValidationValue> | null;
    constructor(showValidationError: ShowValidationErrorCallback, clearValidationError: ClearValidationErrorCallback, getInputValue: GetInputtedValueCallback<ValidationValue>, getValueString: GetValueStringCallback<ValidationValue>, getInsideValidations: GetInsideValidationsCallback<ValidationValue>);
    get list(): ValidationItem<ValidationValue>[];
    set list(value: ValidationItem<ValidationValue>[]);
    /**
     * @description check if input validation list is fulfilled or not
     */
    checkValidity(showError?: boolean): ValidationResult<ValidationValue>;
    /**
     * @description this function will register a function as validation getter sp on each validation check it will call getter function and check it's returned validation
     * @public
     */
    addValidationListGetter(func: GetInsideValidationsCallback<ValidationValue>): void;
}
