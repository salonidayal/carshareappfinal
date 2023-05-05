import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedSubjectService {
    SharingData: Subject<any> = new Subject<any>();
    userSendRequest: Subject<any> = new Subject<any>();
    driverResponse: Subject<any> = new Subject<any>();
    constructor() { }
}
