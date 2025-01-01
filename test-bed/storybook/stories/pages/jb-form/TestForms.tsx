import React from 'react';
import { JBDateInput } from 'jb-date-input/react';
import { JBInput } from 'jb-input/react';
import { JBOptionList, JBSelect } from "jb-select/react";
import { JBTextarea } from "jb-textarea/react";
import { JBPaymentInput } from "jb-payment-input/react";
import { JBImageInput } from "jb-image-input/react";

const genderList = ["male","female"];
export function PersonForm() {
  return (
    <div>
      <JBInput name="name" required label="نام" />
      <JBDateInput name="birthDate" required label="تاریخ تولد" format="YYYY-MM-DD" />
      <JBDateInput name="applyDate" required label="apply date" />
      <JBSelect name="gender" label="جنسیت" required>
        <JBOptionList optionList={genderList}></JBOptionList>
      </JBSelect>
      <JBImageInput name="avatar" label="نمایه" required maxFileSize={500 * 1024} />
      <JBTextarea label="توضیحات" name="description" required />
    </div>
  );
}
export function BankForm() {
  return (
    <div>
      <JBInput name="bankName" required label="نام بانک" />
      {/* <JBInput name="cardNumber" required label="شماره کارت" /> */}
      <JBPaymentInput name="cardNumber" label="شماره کارت" />
    </div>
  );
}