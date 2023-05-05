import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { requests } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  addRequest(data: requests) {
    return this.http.post('http://localhost:3000/requests', data)
  }

  getReq(){
    return this.http.get<requests>('http://localhost:3000/requests')
  }

  requestList() {
    return this.http.get<requests[]>('http://localhost:3000/requests')
  }
}
