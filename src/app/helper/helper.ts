import { ToastController } from "@ionic/angular";
import { toastController } from "@ionic/core";

export class Helper {

  public static async toastMessage(position:'top' | 'middle' | 'bottom',message:string="Veillez saisir tous les champs.",color:string="warning"){
    let toastController:ToastController=new ToastController();
    const toast = await toastController.create({
      message: message,
      duration: 5000,
      position: position,
      color:color,
      cssClass:"toast-message",
    });

    await toast.present();
  }
}
