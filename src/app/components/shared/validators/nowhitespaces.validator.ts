import { AbstractControl } from '@angular/forms';

export function NoWhitespaces(control: AbstractControl): object {
  const isInputEmpty = control.value.trim().length === 0;
  return isInputEmpty ? { emptyString: true } : null;
}
