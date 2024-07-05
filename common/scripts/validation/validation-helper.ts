import {ClearValidationErrorCallback, GetInputtedValueCallback, ShowValidationErrorCallback, ValidationItem,ValidationResult,ValidationResultItem,ValidationResultSummary, GetValueStringCallback,GetInsideValidationsCallback} from "./validation-helper-types";

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
  #getInputValue:GetInputtedValueCallback<ValidationValue> | null = null;
  #getValueString:GetValueStringCallback<ValidationValue> | null = null;
  #getInsideValidations:GetInsideValidationsCallback<ValidationValue>[] = [];
  constructor(showValidationError:ShowValidationErrorCallback, clearValidationError: ClearValidationErrorCallback, getInputValue:GetInputtedValueCallback<ValidationValue>, getValueString:GetValueStringCallback<ValidationValue>,getInsideValidations:GetInsideValidationsCallback<ValidationValue> ) {
    this.#showValidationError = showValidationError;
    this.#clearValidationError= clearValidationError;
    this.#getInputValue = getInputValue;
    this.#getValueString = getValueString;
    this.#getInsideValidations.push(getInsideValidations);
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
    const inputValue = this.#getInputValue();
    const validationResult = this.#checkValueValidation(inputValue);
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
   * @description this function will register a function as validation getter sp on each validation check it will call getter function and check it's returned validation
   * @public
   */
  addValidationListGetter(func:GetInsideValidationsCallback<ValidationValue>){
    this.#getInsideValidations.push(func);
  }
  #getInsideValidationList(){
    const insideValidations:ValidationItem<ValidationValue>[] = [];
    this.#getInsideValidations.forEach((getValidation)=>{
      if(typeof getValidation == "function"){
        insideValidations.push(...getValidation());
      }
    });
    return insideValidations.flat();
  }
  /**
   *@description compare value with all validation
   */
  #checkValueValidation(value: ValidationValue) {
    const validationResult: ValidationResult<ValidationValue> = {
      validationList: [],
      isAllValid: true,
    };
    const insideValidations = this.#getInsideValidationList();
    const list = [...insideValidations, ...this.list];
    list.forEach((validation) => {
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
    let message = validation.message;
    if (validation.validator instanceof RegExp) {
      const text = typeof value == "string"?value:this.#getValueString(value);
      testRes = validation.validator.test(text);
      validation.validator.lastIndex = 0;
    }

    if (typeof validation.validator == "function") {
      const funcRes = validation.validator(value);
      if(typeof funcRes == "string" && funcRes.length >0){
        message = funcRes;
      }
      //if function return string if string was full it mean we must show custom error
      testRes = typeof funcRes == "string"? funcRes.length==0 : funcRes;
    }

    if (!testRes) {
      return {
        isValid: false,
        message: message,
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
