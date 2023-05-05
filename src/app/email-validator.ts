import { AbstractControl, ValidationErrors } from '@angular/forms';

export function EmailValidator(control: AbstractControl): ValidationErrors | null {
  const email = control.value as string;
  if (email && !email.endsWith('darwinbox.io')) {
    return { 'googleEmail': true };
  }
  return null;
}
