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

  getPedidosList(): Observable<Pedido[]> {
    console.log("Receive of API: ", Observable);
    return this.http.get<Pedido[]>(`${this.apiPedido}/list`);
  }
    salvarPedido(pedido: Pedido): Observable<string> {
    console.log("Service for API: ", pedido);
    return this.http.post(`${this.apiPedido}/pedidos`,pedido, { responseType: 'text' });
  }

  atualizarStatusPedidos(atualizacoes: { id: number; status: string }[]): Observable<any> {
    return this.http.patch(`${this.apiPedido}/pedidos/status`, atualizacoes);
  }
}
