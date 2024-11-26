import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TreeSelectModule} from "primeng/treeselect";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {MessageService, TreeNode} from "primeng/api";
import {InputMaskModule} from "primeng/inputmask";
import {CalendarModule} from "primeng/calendar";
import {FloatLabelModule} from "primeng/floatlabel";
import {AuthServiceService} from "../../service/auth-service.service";
import {Router} from "@angular/router";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-register-adm',
  standalone: true,
  imports: [
    PasswordModule,
    ToastModule,
    Button,
    FormsModule,
    InputTextModule,
    CalendarModule,
    InputMaskModule,
    FloatLabelModule,
    TreeSelectModule
  ],
  providers:[MessageService],
  templateUrl: './register-adm.component.html',
  styleUrl: './register-adm.component.css'
})
export class RegisterAdmComponent {
  nome: string ='';
  cpf: string ='';
  genero: string ='';
  nascimento: string='';
  telefone: string ='';
  email: string ='';
  endereco: string ='';
  latitude: string ='';
  longitude: string ='';
  password: string ='';
  confirmPassword: string ='';
  selectedRole: string = '';
  rolesOptions = [
    { label: 'Usuário', value: 'USER' },
    { label: 'Administrador', value: 'ADMIN' },
    { label: 'Gerente', value: 'MANAGER' }
  ];
  selectedNodes: any;
  nodes: TreeNode[] | undefined;

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
      roles: [this.selectedRole] // Passa apenas o valor selecionado.
    };

    if (this.password !== this.confirmPassword) {
      this.messageService.add({severity: 'warn', summary: 'Atenção', detail: 'As senhas são divirgentes!',life: 10000});
    }
    else{
      console.log('Dados enviados:', newUser);
      this.authService.saveAdm(newUser).subscribe(
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
