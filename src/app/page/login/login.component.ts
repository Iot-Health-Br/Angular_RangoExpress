import { Component } from '@angular/core';
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";
import {InputTextModule} from "primeng/inputtext";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../service/auth-service.service";
import {InputMaskModule} from "primeng/inputmask";
import {MenubarModule} from "primeng/menubar";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ToastModule,
    Button,
    RippleModule,
    FormsModule,
    PasswordModule,
    InputTextModule,
    InputMaskModule,
    MenubarModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  password: string ='';
  username: string ='';
  constructor(private router: Router, private authService: AuthServiceService , private messageService: MessageService) {}

  registerUser() {
    this.router.navigate(['/register-user']);
  }

  onLogin() {
    if (this.username && this.password) {
      console.log("Angular Component:",this.username,this.password);
      this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
          if (response.authenticated) {
            // Salvando os dados no localStorage
            localStorage.setItem('userId', response.userId?.toString() || '');
            localStorage.setItem('fullName', response.fullName || '');
            localStorage.setItem('endereço',response.endereco || '');
            localStorage.setItem('latitude',response.latitude || '');
            localStorage.setItem('longitude',response.longitude || '');
            localStorage.setItem('roles',response.roles?.toString()||'');
            // Verificando os dados no localStorage
            console.log('userId:', localStorage.getItem('userId'));
            console.log('fullName:', localStorage.getItem('fullName'));
            console.log('endereço:', localStorage.getItem('endereço'));
            console.log('latitude:', localStorage.getItem('latitude'));
            console.log('longitude:', localStorage.getItem('longitude'));
            console.log('roles:', localStorage.getItem('roles'));
            this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message,life: 10000 });}
          else {
            this.messageService.add({ severity: 'error', summary: 'Error', detail: response.message,life: 10000 });}
        },
        error: (error) => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao tentar fazer login. Por favor, tente novamente.',life: 10000});}
      });
    }
    else {
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Por favor, preencha usuário e senha.',life: 10000});}
  }

  // Método para limpar os campos do formulário
  clearForm() {
    this.username = '';
    this.password = '';
    this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'Login Cancelado',life: 10000});
  }
}
