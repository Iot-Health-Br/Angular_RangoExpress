import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {CurrencyPipe, DatePipe, NgForOf} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {MessageService, PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {Pedido} from "../../interface/pedido";
import {Router} from "@angular/router";
import {PedidoService} from "../../service/pedido.service";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-avaliation-delivery',
  standalone: true,
  imports: [
    Button,
    CurrencyPipe,
    NgForOf,
    PanelModule,
    PrimeTemplate,
    TableModule,
    ToastModule,
    RatingModule,
    FormsModule
  ],
  providers: [MessageService, DatePipe],
  templateUrl: './avaliation-delivery.component.html',
  styleUrl: './avaliation-delivery.component.css'
})
export class AvaliationDeliveryComponent implements OnInit{

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
    this.pedidoService.getAvaliationListOrder(this.idUsuario).subscribe({
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
