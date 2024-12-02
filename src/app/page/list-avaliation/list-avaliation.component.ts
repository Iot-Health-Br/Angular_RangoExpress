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
import {PedidoService} from "../../service/pedido.service";
import {Router} from "@angular/router";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {TagModule} from "primeng/tag";
import {Product} from "../../interface/product";

@Component({
  selector: 'app-list-avaliation',
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
    ToastModule,
    RatingModule,
    FormsModule,
    TagModule
  ],
  providers: [MessageService, DatePipe],
  templateUrl: './list-avaliation.component.html',
  styleUrl: './list-avaliation.component.css'
})
export class ListAvaliationComponent implements OnInit{
  pedidos: Pedido[] = [];
  selectedPedidos: Pedido[] = [];
  product: any;
  products!: Product[];

  constructor(
    private router: Router,
    private pedidoService: PedidoService,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.pedidoService.getListOrderDelivered().subscribe({
      next: (data) => {
        this.pedidos = data;
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

  atualizarPedido() {
    // Implementar lógica de atualização
    if (this.selectedPedidos.length > 0) {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso',
        detail: 'Pedidos atualizados com sucesso'
      });
    }
  }

  limparSelecao() {
    this.selectedPedidos = [];
    this.messageService.add({
      severity: 'info',
      summary: 'Info',
      detail: 'Seleção limpa'
    });
  }

  onSelectionChange(event: any) {
    this.selectedPedidos = event;
  }

  returnHome() {
    this.router.navigate(['/home-adm']);
  }
}
