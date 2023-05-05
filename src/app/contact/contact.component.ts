import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EmailValidator } from '../email-validator';
import { UserService } from '../services/user.service';
import { mailingList } from '../data-type';

@Component({
  selector: 'app-contact',
  template: `
  <form #sendML="ngForm">
    <h3>Join Mailing List</h3>
    <label>
      Email:
      <input type="email"  [formControl]="emailControl">
    </label>
    <div appChangeGreen *ngIf="emailControl.hasError('googleEmail')">
      Email must end with 'darwinbox.io'
    </div>
    <button (click)="submit(sendML.value)">Submit</button>
  </form>
`,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  emailControl = new FormControl('', EmailValidator);

  constructor(private user: UserService) {

  }
  submit(data: mailingList){
    this.user.mailingList(data).subscribe((result)=>{
      if(result){
        alert("successfully added to mailing list")
      }
    })
    
  }
}
