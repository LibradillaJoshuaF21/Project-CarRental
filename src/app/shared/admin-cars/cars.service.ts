import { Injectable } from '@angular/core';
import { Car } from './cars';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private carCollection: AngularFirestoreCollection<Car>;
  car!: Observable<Car[]>;

  constructor(private something: AngularFirestore) { 
    this.carCollection = this.something.collection<Car>('cars');
    this.car = this.carCollection.valueChanges();
  }

  addCar(car: Car){
    const pushkey = this.something.createId();
    car.key = pushkey;
    this.carCollection.doc(pushkey).set(car);
  }

  getCar(){
    return this.car;
  }

  modifyCar(carID: string, carChanges: Car){
    this.carCollection.doc(carID).update(carChanges);
  }

  removeCar(carID: string,){
    this.carCollection.doc(carID).delete();
  }
}
