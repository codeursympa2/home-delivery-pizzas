import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  LoadingController, NavController,} from '@ionic/angular';
import { User } from '../models/user';
import { Helper } from '../helper/helper';
import { Server } from '../models/server';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http:HttpClient,
    private navCtrl:NavController,
    private loading:LoadingController
  ) { }

  public async login(user:User):Promise<void>{
    await this.http.post(`${Server.link}/auth`,{email:user.email,password:user.password})
    .subscribe((res:any) => {
      if (res !== null) {

        //get data

          const token=res.id;
          const token_fullname=res.fullname;
          const token_email=res.email;
          const token_tel=res.tel;

        //store data to localstorage
        localStorage.setItem("token",token);
        localStorage.setItem("token_fullname",token_fullname);
        localStorage.setItem("token_email",token_email);
        localStorage.setItem("token_tel",token_tel);

        //
        this.loading.dismiss();

        //redirect
        this.navCtrl.navigateRoot(['/produit']);
        //message
        Helper.toastMessage("top","Connexion réussie","success")

      }else{

        this.loading.dismiss();
        Helper.toastMessage("top","Identifiant ou mot de passe invalide.","danger")
      }

    });
  }

  public async register(user:User):Promise<void>{
      await this.http.post(`${Server.link}/user`,{email:user.email,password:user.password,fullname:user.fullname,tel:user.tel}).subscribe(
       (success)=>{
        Helper.toastMessage('top',"Inscription effectuée avec succès.","success")
        this.navCtrl.navigateForward("/login");
       },(error)=>{
          Helper.toastMessage('top',"Problème de connexion au serveur","danger")
       }
       );
  }

}
