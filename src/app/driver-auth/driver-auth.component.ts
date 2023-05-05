import { Component, OnInit } from '@angular/core';
import { DriverService } from '../services/driver.service';
import { login, signUp } from '../data-type';


@Component({
  selector: 'app-driver-auth',
  templateUrl: './driver-auth.component.html',
  styleUrls: ['./driver-auth.component.css']
})
export class DriverAuthComponent implements OnInit {

  showLogin : boolean = false;
  authError: String = '';
  constructor(private driver: DriverService) {

  }

  ngOnInit(): void {
    this.driver.reloadDriver()

  }

  signUp(data: signUp): void {
    console.log(data);
    this.driver.driverSignUp(data)
  }

  login(data: login): void {
    this.driver.driverLogin(data);
    this.driver.isLoginError.subscribe((isError) => {
      if(isError) {
        this.authError="incorrect email or password"
      }
    })
  }

  openSignUp(): void {
    this.showLogin = false;

  }

  openLogin(): void {

    this.showLogin = true;

  }

}
