import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interface/product";
import {Pedido} from "../interface/pedido";

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  private apiCardapio = 'http://localhost:8080/api/cardapio';
  private apiPedido = 'http://localhost:8080/api/pedido';
  constructor(private http: HttpClient) {}

  getPratosDoDia(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiCardapio}/hoje`);
  }

  // Lista de Pedidos
  getPedidosList(): Observable<Pedido[]> {
    //console.log("Receive of API: ",<Pedido[]>);
    return this.http.get<Pedido[]>(`${this.apiPedido}/list`);
  }

  // Lista de Pedidos do Usuário
  getPedidosListUser(idUsuario: number): Observable<Pedido[]> {
    localStorage.getItem('userId', );
    //console.log("Receive of API: ",<Pedido[]>);
    return this.http.get<Pedido[]>(`${this.apiPedido}/list/OrderUser/${idUsuario}`);
  }

  // Lista Avaliação de Entregas
  getAvaliationListOrder(idUsuario: number): Observable<Pedido[]> {
    localStorage.getItem('userId', );
    //console.log("Receive of API: ",<Pedido[]>);
    return this.http.get<Pedido[]>(`${this.apiPedido}/list/AvaliationDelivery/${idUsuario}`);
  }


  // Lista de ENTREGAS
  getListDelivery(): Observable<Pedido[]> {
    //console.log("Receive of API: ",<Pedido[]>);
    return this.http.get<Pedido[]>(`${this.apiPedido}/list/delivery`);
  }

  //Lista de AVALIAÇÃO ENTREGAS
  getListOrderDelivered(): Observable<Pedido[]> {
    //console.log("Receive of API: ",<Pedido[]>);
    return this.http.get<Pedido[]>(`${this.apiPedido}/list/OrderDelivered`);
  }

    salvarPedido(pedido: Pedido): Observable<string> {
    console.log("Service for API: ", pedido);
    return this.http.post(`${this.apiPedido}/pedidos`,pedido, { responseType: 'text' });
  }

  atualizarStatusPedidos(idPedido: number, status: any): Observable<Pedido> {
    // Enviando apenas o status como string
    const atualizacao = {
      status: status.key
    };
    console.log('Enviando para API:', atualizacao);
    return this.http.put<Pedido>(`${this.apiPedido}/update/${idPedido}`, atualizacao);
  }

}
