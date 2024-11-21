import { Component } from '@angular/core';
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ToastModule,
    Button,
    RippleModule,
    FormsModule,
    PasswordModule,
    InputTextModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: String ='';
  username: any;
  constructor(private messageService: MessageService) {}

  registerUser() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }

  onLogin() {

  }

  clearForm() {

  }
}
