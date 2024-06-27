import {ClearValidationErrorCallback, GetInputtedTextCallback, ShowValidationErrorCallback, ValidationItem,ValidationResult,ValidationResultItem,ValidationResultSummary} from "./validation-helper-types";

export class ValidationHelper {
  //states
  #validationList: ValidationItem[] = [];
  validation?: ValidationResultSummary = {
    isValid: null,
    message: null,
  };
  //callbacks
  showValidationError: ShowValidationErrorCallback | null = null; 
  clearValidationError: ClearValidationErrorCallback | null = null;
  getInputText:GetInputtedTextCallback | null = null
  constructor(showValidationError:ShowValidationErrorCallback, clearValidationError: ClearValidationErrorCallback, getInputText:GetInputtedTextCallback ) {
    this.showValidationError = showValidationError;
    this.clearValidationError= clearValidationError;
    this.getInputText = getInputText;
  }
  get validationList(): ValidationItem[] {
    return this.#validationList;
  }
  set validationList(value: ValidationItem[]) {
    this.#validationList = value;
    this.checkValidity(false);
  }
  /**
   * @description check if input validation list is fulfilled or not
   */
  checkValidity(showError = true): ValidationResult {
    // this method is for use out of component  for example if user click on submit button and developer want to check if all fields are valid
    //takeAction determine if we want to show user error in web component default Manner or developer will handle it by himself
    const inputText = this.getInputText();
    const validationResult = this.checkInputValidation(inputText);
    this.validation = {
      isValid: validationResult.isAllValid,
      message: null,
    };
    if (!validationResult.isAllValid) {
      const firstFault = validationResult.validationList.find(
        (x) => !x.isValid
      )!;
      this.validation.message = firstFault.message;
      if (showError == true) {
        this.showValidationError(firstFault.message!);
      }
    } else {
      this.clearValidationError();
    }
    return validationResult;
  }
  checkInputValidation(value: string) {
    const validationResult: ValidationResult = {
      validationList: [],
      isAllValid: true,
    };
    this.validationList.forEach((validation) => {
      const res = this.checkValidation(value, validation);
      validationResult.validationList.push(res);
      if (!res.isValid) {
        validationResult.isAllValid = false;
      }
    });
    return validationResult;
  }
  checkValidation(text: string,validation: ValidationItem): ValidationResultItem {
    let testRes;
    if (validation.validator instanceof RegExp) {
      testRes = validation.validator.test(text);
      validation.validator.lastIndex = 0;
    }

    if (typeof validation.validator == "function") {
      testRes = validation.validator(text);
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
