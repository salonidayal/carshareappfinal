import { Component,OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { SharedSubjectService } from '../services/shared-subject.service';
import { requests } from '../data-type';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-driver-view-requests',
  templateUrl: './driver-view-requests.component.html',
  styleUrls: ['./driver-view-requests.component.css']
})
export class DriverViewRequestsComponent implements OnInit{

  reqList : requests[] | undefined;



  constructor(private requestService: RequestService){

  }

 

  ngOnInit(): void {
    this.list();
  }

  list(){
    this.requestService.requestList().subscribe((result) => {
      if(result){
        this.reqList = result;
      }
    })
  }

  

}
