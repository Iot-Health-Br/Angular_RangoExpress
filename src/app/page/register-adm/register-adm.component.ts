import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {TreeSelectModule} from "primeng/treeselect";
import {PasswordModule} from "primeng/password";
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-register-adm',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    TreeSelectModule,
    PasswordModule,
    ToastModule,
    Button
  ],
  providers:[MessageService],
  templateUrl: './register-adm.component.html',
  styleUrl: './register-adm.component.css'
})
export class RegisterAdmComponent {
  username: any;
  nome: any;
  selectedCategoria: any;
  categoria: any;
  password: any;
  confirmPassword: any;

  Save() {

  }

  clearForm() {

  }
}
