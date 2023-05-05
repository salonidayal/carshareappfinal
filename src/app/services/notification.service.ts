import { Injectable,EventEmitter  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification$: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  showNotification(message: string) {
    this.notification$.emit(message);
  }
}
