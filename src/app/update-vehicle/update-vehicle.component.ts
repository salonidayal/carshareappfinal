import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from '../services/car-service.service';
import { cars } from '../data-type'

@Component({
  selector: 'app-update-vehicle',
  templateUrl: './update-vehicle.component.html',
  styleUrls: ['./update-vehicle.component.css']
})
export class UpdateVehicleComponent implements OnInit {
  carData: undefined| cars;

  constructor(private route: ActivatedRoute, private car: CarServiceService){}

  ngOnInit(): void{
    let carId = this.route.snapshot.paramMap.get('id');
    console.log(carId);
    this.car.getCar(carId).subscribe((data)=>{
      console.log(data)
    })
  }

  submit(data: cars): void {
    if(this.carData){
      data.id = this.carData.id;
    }
    this.car.updateCar(data).subscribe((result)=>{
      if(result){
        alert("successfully updated");
      }
    })
    console.log(data )

  }

}
