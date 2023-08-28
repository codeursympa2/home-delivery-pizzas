import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { Server } from '../models/server';
import { Helper } from '../helper/helper';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http:HttpClient,
  ) { }

  public async addOrder(order:Order ):Promise<void>{
    let total:number=order.nbrPizzas*order.pizza.prix;
    await this.http.post(`${Server.link}/order`,
    {
      nbrPizzas:order.nbrPizzas,
      adresse:order.adresse,
      pizza:order.pizza,
      user:order.user})
      .subscribe((success)=>{
      Helper.toastMessage('top',
     `Commande effectuée avec succès.\n
     Votre facture est de ${total} F CFA.\n
     Merci de votre fidélité`
      ,"success")
     },(error)=>{
        Helper.toastMessage('top',"Echec de la validation de la commande","danger")
     }
     );
}


}
