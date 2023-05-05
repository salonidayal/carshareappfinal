import { Injectable,EventEmitter } from '@angular/core';
import { login, mailingList, userSignup } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalidUserAuth= new EventEmitter<boolean>(false)
  constructor(private http: HttpClient,private router:Router) { }

  userSignUp(user: userSignup){
    this.http.post('http://localhost:3000/users',user,{observe: 'response'}).subscribe((result) =>{
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }

  userLogin(data:login){
    this.http.get<userSignup[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/']);
    }
  }

  mailingList(data: mailingList){
    return this.http.post('http://localhost:3000/mailinglist',data)

  }
}
