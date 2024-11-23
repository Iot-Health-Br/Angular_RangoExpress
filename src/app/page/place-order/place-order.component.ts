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
  totalPedido: number = 0; // Armazena o total do pedido

  constructor(private pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidoService.getPratosDoDia().subscribe({
      next: (data) => {
        this.products = data.map(product => ({
          ...product,
          quantidade: 0 // Define uma propriedade quantidade no objeto
        }));
      },
      error: (error) => {
        console.error('Erro ao carregar pratos:', error);
      }
    });
  }

  calcularTotal() {
    // Calcula o total com base nos produtos selecionados
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
    // Aqui você pode enviar os pedidos para o backend
  }

  clearForm() {
    this.selectedProducts = [];
    this.totalPedido = 0;
  }
}
