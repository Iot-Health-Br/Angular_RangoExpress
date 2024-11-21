import {Component, OnInit} from '@angular/core';
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MessageModule} from "primeng/message";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [
    MessageModule,
    ProgressSpinnerModule,
    TableModule,
    ToastModule,
    Button
  ],
  providers: [MessageService],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  products: any;
  selectedProduct: any;
  loading = false;
  error: string | null = null;

  private readonly LOADING_TIME = 5000; // 5 segundos em milissegundos
  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;
    this.products = [];

  }

  changeUser() {

  }

  searchUser() {

  }

  clearForm() {

  }
}
