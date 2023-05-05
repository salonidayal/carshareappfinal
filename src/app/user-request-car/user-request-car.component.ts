import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { requests } from '../data-type';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-user-request-car',
  templateUrl: './user-request-car.component.html',
  styleUrls: ['./user-request-car.component.css']
})
export class UserRequestCarComponent implements OnInit{

  constructor(private route: ActivatedRoute, private request: RequestService){}

  ngOnInit(): void{
  }

  submit(data: requests): void {
    this.request.addRequest(data).subscribe((result)=>{
      if(result){
        alert("successfully sent");
      }
    })
    console.log(data)

  }

}
