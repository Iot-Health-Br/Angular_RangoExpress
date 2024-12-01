import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {DropdownModule} from "primeng/dropdown";
import {PanelModule} from "primeng/panel";
import {MessageService, PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {Pedido} from "../../interface/pedido";
import {Router} from "@angular/router";
import {PedidoService} from "../../service/pedido.service";

@Component({
  selector: 'app-list-order-user',
  standalone: true,
  imports: [
    Button,
    CheckboxModule,
    CurrencyPipe,
    DropdownModule,
    NgForOf,
    PanelModule,
    PrimeTemplate,
    TableModule,
    ToastModule
  ],
  providers: [MessageService, DatePipe],
  templateUrl: './list-order-user.component.html',
  styleUrl: './list-order-user.component.css'
})
export class ListOrderUserComponent implements OnInit{
  pedidos: Pedido[] = [];
  selectedPedidos: Pedido[] = [];
  idUsuario: number = Number(localStorage.getItem('userId')) || 0;

  constructor(
    private router: Router,
    private pedidoService: PedidoService,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.pedidoService.getPedidosListUser(this.idUsuario).subscribe({
      next: (data) => {
        this.pedidos = data;
        console.log(data);

      },
      error: (error) => {
        console.error('Erro ao carregar pedidos:', error);
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível carregar os pedidos'
        });
      }
    });
  }

  formatarData(data: string): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm') || '';
  }

  returnHome() {
    this.router.navigate(['/home']);
  }

  atualizarPedido() {

  }

  limparSelecao() {

  }
}
