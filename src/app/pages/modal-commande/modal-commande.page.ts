import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { User } from 'src/app/models/user';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-modal-commande',
  templateUrl: './modal-commande.page.html',
  styleUrls: ['./modal-commande.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class ModalCommandePage  {

  nbrPizzas!: string;
  adresse!: string;
  

  constructor(
    private modalCtrl: ModalController,
    ) {}

    ngOnInit(): void {

    }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss({"nbrPizzas":this.nbrPizzas,"adresse":this.adresse}, 'confirm');
  }


}
