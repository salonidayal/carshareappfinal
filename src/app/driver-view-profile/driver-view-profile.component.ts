import { Component, OnInit } from '@angular/core';
import { signUp } from '../data-type';
// import { ProfileService } from '../services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-view-profile',
  templateUrl: './driver-view-profile.component.html',
  styleUrls: ['./driver-view-profile.component.css']
})
export class DriverViewProfileComponent implements OnInit {

  profile: undefined | signUp;
  driverName:string="";
  email:string="";
  empid: string='';
  dept: string='';


  constructor(private route: Router){
    this.route.events.subscribe((val: any) => {
      

      if(val.url){
          let driverStore=localStorage.getItem('driver');
         let driverData =driverStore && JSON.parse(driverStore)[0];
         this.driverName=driverData.name;
         this.email = driverData.email;
         this.empid = driverData.empid;
         this.dept = driverData.department;

      }
    })
  }

  ngOnInit(): void {
      
  }

  // viewProf(id: number){
  //   this.profileService.viewProfile(id).subscribe((result) => {
  //     console.log(result);
  //   })
  // }

}
