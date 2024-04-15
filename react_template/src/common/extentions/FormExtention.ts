import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
} from "react-reactive-form";

export class FormExtention {
  static markAllAsTouched = function (myForm: AbstractControl) {
    if (myForm instanceof FormGroup) {
      const formGroupValue = myForm as FormGroup;
      for (const item in formGroupValue.controls) {
        FormExtention.markAllAsTouched(formGroupValue.get(item)!);
      }
      myForm.updateValueAndValidity({ onlySelf: true });
    } else if (myForm instanceof FormArray) {
      const formArrayValue = myForm as FormArray;
      for (let i = 0; i < formArrayValue.length; i++) {
        const formGroupValue = formArrayValue.at(i);
        FormExtention.markAllAsTouched(formGroupValue as AbstractControl);
      }
    } else if (myForm instanceof FormControl) {
      myForm.markAsTouched({ emitEvent: true });
    }
  };

  static markAllUnAsTouched = function (myForm: AbstractControl) {
    if (myForm instanceof FormGroup) {
      const formGroupValue = myForm as FormGroup;
      for (const item in formGroupValue.controls) {
        FormExtention.markAllUnAsTouched(formGroupValue.get(item)!);
      }
      myForm.updateValueAndValidity({ emitEvent: false });
    } else if (myForm instanceof FormArray) {
      const formArrayValue = myForm as FormArray;
      for (let i = 0; i < formArrayValue.length; i++) {
        const formGroupValue = formArrayValue.at(i);
        FormExtention.markAllUnAsTouched(formGroupValue as AbstractControl);
      }
    } else if (myForm instanceof FormControl) {
      let value = myForm.value;
      myForm.reset();
      myForm.setValue(value, { emitEvent: false });
      myForm.updateValueAndValidity({ emitEvent: true });
    }
  };
}
