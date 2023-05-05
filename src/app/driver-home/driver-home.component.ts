import { Component,OnInit } from '@angular/core';
import { CarServiceService } from '../services/car-service.service';
import { cars } from '../data-type';

@Component({
  selector: 'app-driver-home',
  templateUrl: './driver-home.component.html',
  styleUrls: ['./driver-home.component.css']
})
export class DriverHomeComponent implements OnInit {

  carList: undefined | cars[];

  constructor(private car: CarServiceService){

  }

  ngOnInit(): void {
      this.list();
  }

  deleteCar(id: number){
    this.car.deleteCar(id).subscribe((result) => {
      if(result){
        alert("car deleted")
      }
      else{
        alert("error")
      }
    })
    this.list();
  }

  list(){
    this.car.listCar().subscribe((result) => {
      if(result){
        this.carList = result;
      }
    })
  }

}
