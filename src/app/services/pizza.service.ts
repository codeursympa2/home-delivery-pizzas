import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { Pizza } from '../models/pizza';
import { Server } from '../models/server';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(
    private http:HttpClient,
  ) { }

  public getPizzas():Observable<any>{
     return  this.http.get(`${Server.link}/pizza`);
  }
}
