export interface Pedido {
  itens: {
    nome: string;
    ingredientes: string[];
    quantidade: number;
    valor: number;
  }[];
  idPedido: number;
  idUsuario: number;
  nomeUsuario: string;
  endereco: string;
  latitude: string;
  longitude: string;
  totalPedido: number;
  dataPedido: string;
  status: string;
}
