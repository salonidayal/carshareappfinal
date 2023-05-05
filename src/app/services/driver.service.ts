import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login, signUp } from '../data-type';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { response } from 'express';


@Injectable({
  providedIn: 'root'
})
export class DriverService {
  isDriverLoggedIn = new BehaviorSubject<boolean>(false);

  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {

   }

  driverSignUp(data: signUp){
    this.http.post('http://localhost:3000/driver',data,{observe: 'response'}).subscribe((result)=>{
      console.log(result);
      if(result){
        this.isDriverLoggedIn.next(true);
        localStorage.setItem('driver',JSON.stringify(result.body));
        this.router.navigate(['carhome'])
      }
    })
  }

  reloadDriver(){
    if(localStorage.getItem('driver')){
      this.isDriverLoggedIn.next(true)
      this.router.navigate(['carhome'])
    }
  }


  driverLogin(data: login){
    this.http.get(`http://localhost:3000/driver?email=${data.email}&password=${data.password}`,{observe: 'response'}).subscribe((result: any)=>{
      if(result && result.body && result.body.length === 1){
        this.isLoginError.emit(false)
        localStorage.setItem('driver',JSON.stringify(result.body));
        this.router.navigate(['carhome'])
      }
      else{
        this.isLoginError.emit(true)
      }
    })
  }

}
