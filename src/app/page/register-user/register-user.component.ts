import { Component } from '@angular/core';
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {MessageService} from "primeng/api";
import {Router} from "@angular/router";
import {CalendarModule} from "primeng/calendar";
import {User} from "../../model/user.model";
import {AuthServiceService} from "../../service/auth.service";
import {InputMaskModule} from "primeng/inputmask";
import {FloatLabelModule} from "primeng/floatlabel";

@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [
    PasswordModule,
    ToastModule,
    Button,
    FormsModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    FloatLabelModule
  ],
  providers:[MessageService],
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.css'
})
export class RegisterUserComponent {
  nome: string ='';
  cpf: string ='';
  genero: string ='';
  nascimento: Date | undefined;
  telefone: string ='';
  email: string ='';
  endereco: string ='';
  latitude: string ='';
  longitude: string ='';
  password: string ='';
  confirmPassword: string ='';
  value: any;

  constructor(private authService: AuthServiceService, private router: Router, private messageService: MessageService) {}

  Save() {
    const newUser: User = {
      nome: this.nome,
      cpf: this.cpf,
      genero: this.genero,
      nascimento: this.nascimento,
      telefone: this.telefone,
      email: this.email,
      endereco: this.endereco,
      latitude: this.latitude,
      longitude: this.longitude,
      password: this.password,
      roles: [] //this.categoria
    };

    if (this.password !== this.confirmPassword) {
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'As senhas são divirgentes!',life: 10000});
    }
    else{
      console.log('Dados enviados:', newUser);
      this.authService.saveUser(newUser).subscribe(
        (response) => {
          this.messageService.add({severity:'success', summary:'Sucesso', detail: response, life: 10000});
          console.log('Pessoa salva com sucesso!', response);
          this.clearForm();
        },
        (error) => {
          const errorMessage = error.error;
          this.messageService.add({severity:'error', summary:'Erro', detail: errorMessage, life: 10000 });
          console.error('Erro ao salvar a pessoa', error);
        }
      );
    }
  }

  clearForm() {
      this.nome = '';
      this.cpf = '';
  }

  return() {
    this.router.navigate(['/login']);
  }
}
