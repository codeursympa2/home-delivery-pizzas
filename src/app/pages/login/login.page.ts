import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Helper } from 'src/app/helper/helper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class LoginPage implements OnInit {

  //Declaration du formulaire et ajout des champs
  loginForm:FormGroup=new FormGroup({

    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    public alertCtrl:AlertController,
    private formBuilder:FormBuilder,
    private auth:AuthService,
    private router:Router
  ) { }

   ngOnInit() {

    if (localStorage.getItem("token") !== null) {
      this.router.navigate(['/produit'])
     }
    this.loginForm=this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

  }

  public async onSubmit(){
    if (this.loginForm.invalid) {
      await Helper.toastMessage("top");
    }else{
        let user:User=new User(this.loginForm.value.email,this.loginForm.value.password)
        //send data
        this.auth.login(user);
    }


}
}
