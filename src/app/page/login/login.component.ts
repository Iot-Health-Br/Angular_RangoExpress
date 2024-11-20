import { Component } from '@angular/core';
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ToastModule,
    Button,
    RippleModule
  ],
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private messageService: MessageService) {}

  show() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message Content' });
  }
}
