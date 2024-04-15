// import {
//   FormGroup,
//   FormArray,
//   FormControl,
//   AbstractControl,
// } from "react-reactive-form";

// declare module "react-reactive-form" {
//   interface AbstractControl {
//     markAllAsDirty(this: AbstractControl): void;
//     markAllUnAsDirty(this: AbstractControl): void;
//   }
// }

// AbstractControl.prototype.markAllAsDirty = function (this: AbstractControl) {
//   if (this instanceof FormGroup) {
//     const formGroupValue = this as FormGroup;
//     for (const item in formGroupValue.controls) {
//       formGroupValue.get(item)!.markAllAsDirty();
//     }
//     this.updateValueAndValidity({ onlySelf: true });
//   } else if (this instanceof FormArray) {
//     const formArrayValue = this as FormArray;
//     for (let i = 0; i < formArrayValue.length; i++) {
//       const formGroupValue = formArrayValue.at(i);
//       (formGroupValue as AbstractControl).markAllAsDirty();
//     }
//   } else if (this instanceof FormControl) {
//     this.markAsDirty();
//     this.updateValueAndValidity({ onlySelf: true });
//   }
// };

// AbstractControl.prototype.markAllUnAsDirty = function (this: AbstractControl) {
//   // tslint:disable-next-line: forin
//   if (this instanceof FormGroup) {
//     const formGroupValue = this as FormGroup;
//     for (const item in formGroupValue.controls) {
//       formGroupValue.get(item)!.markAllUnAsDirty();
//     }
//     this.updateValueAndValidity({ emitEvent: false });
//   } else if (this instanceof FormArray) {
//     const formArrayValue = this as FormArray;
//     for (let i = 0; i < formArrayValue.length; i++) {
//       const formGroupValue = formArrayValue.at(i);
//       (formGroupValue as AbstractControl).markAllUnAsDirty();
//     }
//   } else if (this instanceof FormControl) {
//     let value = this.value;
//     this.reset();
//     this.setValue(value, { emitEvent: false });
//     this.updateValueAndValidity({ emitEvent: false });
//   }
// };
