import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType: string = 'default';
  driverName:string="";
  userName:string="";

  constructor(private route: Router){
    this.route.events.subscribe((val: any) => {
      

      if(val.url){
        if(localStorage.getItem('driver') && val.url.includes('car')){
          let driverStore=localStorage.getItem('driver');
         let driverData =driverStore && JSON.parse(driverStore)[0];
         this.driverName=driverData.name;
          this.menuType = 'driver';
        }
        else if(localStorage.getItem('user')){
          let userStore = localStorage.getItem('user');
          let userData = userStore && JSON.parse(userStore);
          this.userName= userData.name;
          this.menuType='user';
        }
        else{
          this.menuType="default";
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('driver');
    this.route.navigate(['/'])
  }

  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['/user'])
  }

  ngOnInit(): void {}

}
