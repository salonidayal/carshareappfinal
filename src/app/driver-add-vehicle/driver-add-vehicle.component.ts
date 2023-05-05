import { Component,OnInit } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';
import { cars } from '../data-type';

@Component({
  selector: 'app-driver-add-vehicle',
  templateUrl: './driver-add-vehicle.component.html',
  styleUrls: ['./driver-add-vehicle.component.css']
})
export class DriverAddVehicleComponent {

  addMessage : string | undefined = '';

  constructor(private car: CarServiceService){


  }

  submit(data: cars)
  {
    this.car.addCar(data).subscribe((result)=>{
      if(result){
        alert("Vehicle Listed Successfully");
      }
      else{
        alert("Vehicle Adding Failed");
      }
     });
  }

  ngOnInit(){

  }

}
