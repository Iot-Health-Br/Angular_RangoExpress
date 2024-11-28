import {Component, OnInit} from '@angular/core';
import {MessageModule} from "primeng/message";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {Button} from "primeng/button";
import {MessageService, PrimeTemplate} from "primeng/api";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {combineLatest, timer} from "rxjs";
import {User} from "../../model/user.model";
import {AuthServiceService} from "../../service/auth-service.service";

@Component({
  selector: 'app-list-user',
  standalone: true,
  imports: [
    PrimeTemplate,
    TableModule,
    FormsModule,
    CommonModule,
    Button,
    ToastModule,
    ProgressSpinnerModule,
    MessageModule
  ],
  providers: [MessageService],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent implements OnInit{
  products!: User[];
  selectedProduct!: User;
  users: User[] = [];
  loading = false;
  error: string | null = null;

  private readonly LOADING_TIME = 5000; // 5 segundos em milissegundos
  constructor(private messageService: MessageService, private authServiceService: AuthServiceService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.loading = true;
    this.error = null;
    this.products = [];

    // Criar um timer de 5 segundos
    const minimumLoadingTime = timer(this.LOADING_TIME);

    combineLatest([this.authServiceService.getUsers(), minimumLoadingTime]).subscribe({
      next: ([data, _]) => {
        this.products = data;
        this.loading = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Dados carregados com sucesso!'
        });
      },
      error: (err) => {
        this.error = 'Erro ao carregar lista de usuários: ' + err.message;
        this.loading = false;
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: this.error
        });
      },
      complete: () => {
        this.loading = false;
      }
    });

  }

  changeUser() {

  }

  clearForm() {
    if (this.loading) return;
    this.selectedProduct = null as any;
    this.error = null;
  }

  searchUser() {
    if (this.loading) return;
    this.loadUsers();
  }
}
