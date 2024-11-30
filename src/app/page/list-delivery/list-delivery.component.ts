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
import {forkJoin} from "rxjs";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-list-delivery',
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
    FormsModule
  ],
  providers: [MessageService, DatePipe],
  templateUrl: './list-delivery.component.html',
  styleUrl: './list-delivery.component.css'
})
export class ListDeliveryComponent implements OnInit{
  pedidos: Pedido[] = [];
  selectedPedidos: Pedido[] = [];
  status: any[] = [
    { key: "PRONTO", label: 'PRONTO' },
    { key: "ENTREGUE", label: 'ENTREGUE' },
    { key: "CANCELADO", label: 'CANCELADO' }
  ];
  constructor(
    private pedidoService: PedidoService,
    private messageService: MessageService,
    private datePipe: DatePipe
  ) {}
  ngOnInit() {
    this.pedidoService.getListDelivery().subscribe({
      next: (data) => {
        this.pedidos = data;
        console.log(data);
        this.pedidos.forEach(pedido => {
          pedido.status = this.status.find(s => s.key === pedido.status) || null;
        });
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
  isSelected(pedido: Pedido): boolean {
    return this.selectedPedidos.some(p => p.idPedido === pedido.idPedido);
  }

  toggleSelection(pedido: Pedido) {
    const index = this.selectedPedidos.findIndex(p => p.idPedido === pedido.idPedido);
    if (index === -1) {
      this.selectedPedidos.push(pedido);
    } else {
      this.selectedPedidos.splice(index, 1);
    }
  }


  onStatusChange(pedido: Pedido) {
    // Aqui você pode implementar a lógica para atualizar o status no backend
    console.log(`Status do pedido ${pedido.idPedido} alterado para: `, pedido.status);
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: `Status do pedido ${pedido.idPedido} atualizado para ${pedido.status.length}`
    });
  }

  formatarData(data: string): string {
    return this.datePipe.transform(data, 'dd/MM/yyyy HH:mm') || '';
  }

  atualizarPedido() {
    if (this.selectedPedidos.length > 0) {
      const atualizacoes = this.selectedPedidos.map(pedido =>
        this.pedidoService.atualizarStatusPedidos(
          pedido.idPedido,
          pedido.status // Enviando apenas a key do status
        )
      );

      forkJoin(atualizacoes).subscribe({
        next: (resultados) => {
          this.messageService.add({
            severity: 'success',
            summary: 'Sucesso',
            detail: `${resultados.length} pedido(s) atualizado(s) com sucesso`
          });

          // Recarrega a lista de pedidos
          this.ngOnInit();

          // Limpa a seleção
          this.selectedPedidos = [];
        },
        error: (erro) => {
          console.error('Erro ao atualizar pedidos:', erro);
          this.messageService.add({
            severity: 'error',
            summary: 'Erro',
            detail: 'Erro ao atualizar os pedidos'
          });
        }
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
}
