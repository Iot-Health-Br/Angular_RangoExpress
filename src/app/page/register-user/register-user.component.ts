import { Component } from '@angular/core';
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    PasswordModule,
    ToastModule,
    Button,
    FormsModule,
    InputTextModule
  ],
  providers:[MessageService],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  password: any;
  confirmPassword: any;
  nome: any;
  username: any;

  Save() {

  }

  clearForm() {

  }
}
