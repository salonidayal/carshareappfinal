import { Component,OnInit } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';
import { booking, cars } from '../data-type';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';
import { SharedSubjectService } from '../services/shared-subject.service';

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.component.html',
  styleUrls: ['./available-cars.component.css']
})
export class AvailableCarsComponent implements OnInit
{
  carData: cars;
  carList: undefined | cars[];
  revokeBooking=false;
  InputList: Array<string> = [];

  constructor(private car: CarServiceService,private activeRoute:ActivatedRoute,private notificationService: NotificationService,private _sharedSubject: SharedSubjectService){
    this._sharedSubject.driverResponse.subscribe(o => {
      this.InputList.push(o);
    });
  }

  ngOnInit(): void {
    this.list();
    let carId= this.activeRoute.snapshot.paramMap.get('carId');
    console.warn(carId);
    carId && this.car.getCar(carId).subscribe((result)=>{
      this.carData= result;
      let carData= localStorage.getItem('localCart');
      if(carId && carData){
        let items = JSON.parse(carData);
        items = items.filter((item:cars)=>carId=== item.id.toString());
        if(items.length){
          this.revokeBooking=true
        }else{
          this.revokeBooking=false
        }
  }
})}

  // bookCar(id: number){
  //   if(this.carData){
  //     alert("booking request sent");
  //   let user = localStorage.getItem('user');
  //   let userId = user && JSON.parse(user).id;
  //   console.log(userId);
  //   let bookingData: booking = {
  //     ...this.carData,
  //     userId
  //   }
  //   console.log(bookingData)

  //   }
    
  // }

  bookCar(){
      
  }

 


  list(){
    this.car.listCar().subscribe((result) => {
      if(result){
        this.carList = result;
      }
    })
  }
}
