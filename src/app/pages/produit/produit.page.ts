import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { PizzaService } from 'src/app/services/pizza.service';
import { Pizza } from 'src/app/models/pizza';
import { ModalCommandePage } from '../modal-commande/modal-commande.page';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { User } from 'src/app/models/user';
import { OrderService } from 'src/app/services/order.service';
import { Helper } from 'src/app/helper/helper';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProduitPage implements OnInit {

  pizzas: Pizza[] = []; // Tableau pour stocker les pizzas
  user!:User; // Utilisateur connecté



  constructor(
    private pizzaService: PizzaService,
    private orderService:OrderService,
    private modalCtrl: ModalController,
    private router:Router
    ) { }

  ngOnInit() {

    if (localStorage.getItem("token") == null) {
        this.router.navigate(['/login'])
    }
    this.getPizzas();

    this.user=new User(
      localStorage.getItem("token_email")!,
      "",
      localStorage.getItem("token_fullname")!,
      localStorage.getItem("token")!,
      localStorage.getItem("token_tel")!
    );
  }

  //Récupération de pizzas
  getPizzas(): void {
    this.pizzaService.getPizzas()
      .subscribe(response => {
        // Mise à jour du tableau de pizzas avec les données reçues
        this.pizzas = response._embedded.pizza;
      });
  }

  //Rechargement pizzas
  handleRefresh(event:any) {
    setTimeout(() => {
      // Chargement des données
      this.getPizzas()
      event.target.complete();

    }, 2000);
  }

  //Ouverture du formulaire
  async openModal(pizza:Pizza) {
    const modal = await this.modalCtrl.create({
      component: ModalCommandePage,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
       if(data.nbrPizzas > 0 && data.adresse !== null){
         //On recupere la commande
         let order:Order=new Order(data.nbrPizzas,data.adresse,pizza,this.user);
         //On fait la commande
         this.orderService.addOrder(order);
       }else{
          Helper.toastMessage("top")
       }
    }
  }

  //Deconnexion
  logout(){
    localStorage.clear();
    Helper.toastMessage("bottom","Vous êtes deconnecté.","primary")
  }

}
