import { AbstractControl } from '@angular/forms';

export function NoWhitespaces(control: AbstractControl) {
  const isInputEmpty = control.value.trim().length === 0;
  return isInputEmpty ? { 'emptystring': true } : null;
}
