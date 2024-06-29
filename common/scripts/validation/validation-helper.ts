import {ClearValidationErrorCallback, GetInputtedTextCallback, ShowValidationErrorCallback, ValidationItem,ValidationResult,ValidationResultItem,ValidationResultSummary, getValueStringCallback} from "./validation-helper-types";

export class ValidationHelper<ValidationValue>{
  //states
  #list: ValidationItem<ValidationValue>[] = [];
  #resultSummary?: ValidationResultSummary = {
    isValid: null,
    message: null,
  };
  get resultSummary(){
    return this.#resultSummary;
  }
  result: ValidationResult<ValidationValue> | null = null;
  //callbacks
  #showValidationError: ShowValidationErrorCallback | null = null; 
  #clearValidationError: ClearValidationErrorCallback | null = null;
  #getInputText:GetInputtedTextCallback<ValidationValue> | null = null;
  #getValueString:getValueStringCallback<ValidationValue> | null = null;
  constructor(showValidationError:ShowValidationErrorCallback, clearValidationError: ClearValidationErrorCallback, getInputText:GetInputtedTextCallback<ValidationValue> ) {
    this.#showValidationError = showValidationError;
    this.#clearValidationError= clearValidationError;
    this.#getInputText = getInputText;
  }
  setValueStringCallback(callback:getValueStringCallback<ValidationValue>){
    this.#getValueString = callback;
  }
  get list(): ValidationItem<ValidationValue>[] {
    return this.#list;
  }
  set list(value: ValidationItem<ValidationValue>[]) {
    this.#list = value;
    this.checkValidity(false);
  }
  /**
   * @description check if input validation list is fulfilled or not
   */
  checkValidity(showError = true): ValidationResult<ValidationValue> {
    // this method is for use out of component  for example if user click on submit button and developer want to check if all fields are valid
    //takeAction determine if we want to show user error in web component default Manner or developer will handle it by himself
    const inputText = this.#getInputText();
    const validationResult = this.#checkValueValidation(inputText);
    this.#resultSummary = {
      isValid: validationResult.isAllValid,
      message: null,
    };
    if (!validationResult.isAllValid) {
      const firstFault = validationResult.validationList.find(
        (x) => !x.isValid
      )!;
      this.resultSummary.message = firstFault.message;
      if (showError == true) {
        this.#showValidationError(firstFault.message!);
      }
    } else {
      this.#clearValidationError();
    }
    this.result = validationResult;
    return validationResult;
  }
  /**
   *@description compare value with all validation
   */
  #checkValueValidation(value: ValidationValue) {
    const validationResult: ValidationResult<ValidationValue> = {
      validationList: [],
      isAllValid: true,
    };
    this.list.forEach((validation) => {
      const res = this.#checkValidation(value, validation);
      validationResult.validationList.push(res);
      if (!res.isValid) {
        validationResult.isAllValid = false;
      }
    });
    return validationResult;
  }
  /**
   * @description check single validation item
   */
  #checkValidation(value: ValidationValue,validation: ValidationItem<ValidationValue>): ValidationResultItem<ValidationValue> {
    let testRes:boolean;
    if (validation.validator instanceof RegExp) {
      const text = typeof value == "string"?value:this.#getValueString(value);
      testRes = validation.validator.test(text);
      validation.validator.lastIndex = 0;
    }

    if (typeof validation.validator == "function") {
      testRes = validation.validator(value);
    }

    if (!testRes) {
      return {
        isValid: false,
        message: validation.message,
        validation: validation,
      };
    }
    return {
      isValid: true,
      message: "",
      validation: validation,
    };
  }
}
