import {Product} from "./product";

interface Pedido {
  itens: Product[];
  totalPedido: number;
  dataPedido: string;
}
