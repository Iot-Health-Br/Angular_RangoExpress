export interface Pedido {
  itens: {
    nome: string;
    ingredientes: string[];
    quantidade: number;
    valor: number;
  }[];
  totalPedido: number;
  dataPedido: string;
  status: string;
}
