import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AlertController, IonicModule } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Helper } from 'src/app/helper/helper';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,ReactiveFormsModule]
})
export class SignupPage implements OnInit {

  submitted!:boolean;
  //Declaration du formulaire
  signupForm:FormGroup=new FormGroup({
    fullname: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    password_confirm:new FormControl(''),
    tel:new FormControl(''),
  });

  constructor(
    private alertCtrl:AlertController,
    private formBuilder:FormBuilder,
    private auth:AuthService,
    private router:Router
  ) { }

   ngOnInit() {
    if ( localStorage.getItem("token") !== null) {
      this.router.navigate(['/produit'])
    }
    this.signupForm=this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      password_confirm: ['',[Validators.required,Validators.minLength(6)]],
      tel: ['', Validators.required],
    });
  }

  public async onSubmit(){

    if (this.signupForm.invalid) {
      await Helper.toastMessage("top");
    }else{
        if(this.signupForm.value.password != this.signupForm.value.password_confirm){
          Helper.toastMessage("top","Les deux mots de passe doivent être identique.");
        }else{
          let user:User=new User(this.signupForm.value.email,this.signupForm.value.password,this.signupForm.value.fullname,)
          //send data
          this.auth.register(user);
        }

    }


  }
}
