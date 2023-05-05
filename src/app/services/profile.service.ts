import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signUp } from '../data-type';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient)
  {

   }

   viewProfile(id: number){
    return this.http.get<signUp>(`http://localhost:3000/driver/${id}`)
   }

}
