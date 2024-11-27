// list-order.component.ts
import { Component, OnInit } from '@angular/core';
import { TableModule } from "primeng/table";
import { Button } from "primeng/button";
import { CurrencyPipe, DatePipe, NgForOf } from "@angular/common";
import { PaginatorModule } from "primeng/paginator";
import { PanelModule } from "primeng/panel";
import { ToastModule } from "primeng/toast";
import { MessageService } from "primeng/api";
import { PedidoService } from "../../service/pedido.service";
import { Pedido } from "../../interface/pedido";

@Component({
  selector: 'app-list-order',
  standalone: true,
  imports: [
    TableModule,
    Button,
    CurrencyPipe,
    DatePipe,
    NgForOf,
    PaginatorModule,
    PanelModule,
    ToastModule
  ],
  providers: [MessageService, DatePipe],
  templateUrl: './list-order.component.html',
  styleUrl: './list-order.component.css'
})
export class ListOrderComponent implements OnInit {
  pedidos: Pedido[] = [];
  selectedPedidos: Pedido[] = [];

  constructor(
    private pedidoService: PedidoService,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.pedidoService.getPedidosList().subscribe({
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
}
