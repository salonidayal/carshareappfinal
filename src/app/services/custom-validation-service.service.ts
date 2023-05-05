import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map} from "rxjs/operators";
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor(private http: HttpClient) {}

  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors['passwordMismatch']
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
          return true;
      } else {
        confirmPasswordControl.setErrors(null);
          return null;
      }
    };
  }

  validateEmpIdNotTaken(control: AbstractControl) {
    return this.checkEmpIdNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { employeeIdTaken: true };
      })
    );
  }

  validateEmailNotTaken(control: AbstractControl) {
    return this.checkEmailNotTaken(control.value).pipe(
      map(res => {
        return res ? null : { emailTaken: true };
      })
    );
  }

  //Fake API call -- You can have this in another service
  checkEmpIdNotTaken(employeeId: string): Observable<boolean> {
    return this.http.get("assets/fakedb.json").pipe(
      map((employeeIdList: Array<any>) =>
        employeeIdList.filter(employee => employee.employeeId === employeeId)
      ),
      map(employees => !employees.length)
    );
  }

  checkEmailNotTaken(email: string): Observable<boolean> {
    return this.http.get("assets/email.json").pipe(
      map((emailList: Array<any>) =>
        emailList.filter(email => email.email === email)
      ),
      map(emails => !emails.length)
    );
  }
}
