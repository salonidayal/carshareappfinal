import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cars } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class CarServiceService {

  constructor(private http: HttpClient) { }

  addCar(data: cars) {
    return this.http.post('http://localhost:3000/cars', data)
  }

  listCar() {
    return this.http.get<cars[]>('http://localhost:3000/cars')
  }

  deleteCar(id: number) {
    return this.http.delete(`http://localhost:3000/cars/${id}`)
  }

  getCar(id: string){
    return this.http.get<cars>(`http://localhost:3000/cars/${id}`)
  }

  updateCar(cars: cars){
    return this.http.put<cars>(`http://localhost:3000/cars/${cars.id}`,cars);
  }


}
