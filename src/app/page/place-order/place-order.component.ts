import { Component, OnInit } from '@angular/core';
import { MenubarModule } from "primeng/menubar";
import { PanelModule } from "primeng/panel";
import { TableModule } from "primeng/table";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MessageService } from "primeng/api";
import { PedidoService } from "../../service/pedido.service";
import { Product } from "../../../interface/product";
import { ToastModule } from "primeng/toast";
import { Button } from "primeng/button";

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [
    MenubarModule,
    PanelModule,
    TableModule,
    FormsModule,
    CommonModule,
    ToastModule,
    Button
  ],
  providers: [MessageService],
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.css'
})
export class PlaceOrderComponent implements OnInit {
  products: Product[] = [];
  selectedProducts: Product[] = [];
  totalPedido: number = 0;

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidoService.getPratosDoDia().subscribe({
      next: (data) => {
        this.products = data.map(product => ({
          ...product,
          quantidade: 0
        }));
      },
      error: (error) => {
        console.error('Erro ao carregar pratos:', error);
      }
    });
  }

  onSelectionChange(selectedItems: Product[]) {
    // Primeiro, zera a quantidade dos produtos que foram desmarcados
    this.products.forEach(product => {
      if (!selectedItems.includes(product)) {
        product.quantidade = 0;
      }
    });

    // Depois, garante que os produtos selecionados tenham quantidade mínima de 1
    selectedItems.forEach(product => {
      if (product.quantidade === 0) {
        product.quantidade = 1;
      }
    });

    this.calcularTotal();
  }

  calcularTotal() {
    this.totalPedido = this.selectedProducts.reduce((total, product) => {
      return total + (product.valor * product.quantidade);
    }, 0);
  }

  SalvarPedido() {
    const pedidos = this.selectedProducts
      .filter(product => product.quantidade > 0)
      .map(product => ({
        nome: product.nome,
        quantidade: product.quantidade,
        valor: product.valor
      }));

    if (pedidos.length === 0) {
      console.warn('Nenhum produto selecionado!');
      return;
    }

    console.log('Pedidos a serem salvos:', pedidos);
  }

  clearForm() {
    this.products.forEach(product => {
      product.quantidade = 0;
    });
    this.selectedProducts = [];
    this.totalPedido = 0;
  }
}
