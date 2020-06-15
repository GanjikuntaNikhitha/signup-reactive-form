import { FormGroup } from "@angular/forms";

export function PasswordChecker(
  // FormControl tracks the value and validation status of an individual form control.
  controlName: string,
  CompareControlName: string,
) {
  return (formGroup: FormGroup) => {
    // FormGroup tracks the same values and status for a collection of form controls.
    const password = formGroup.controls[controlName];
    const confPassword = formGroup.controls[CompareControlName];

    if (password.value !== confPassword.value) {
      confPassword.setErrors({ mustmatch: true });
    } else {
      confPassword.setErrors(null);
    }
  };
}
