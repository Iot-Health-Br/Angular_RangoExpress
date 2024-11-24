import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interface/product";
import {Pedido} from "../interface/pedido";

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  private apiCardapio = 'http://localhost:8080/api/cardapio'; // Ajuste para sua URL
  private apiPedido = 'http://localhost:8080/api/pedido'; // Ajuste para sua URL
  constructor(private http: HttpClient) {}

  getPratosDoDia(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiCardapio}/hoje`);
  }
    salvarPedido(pedido: Pedido): Observable<string> {
    console.log("Service for API: ", pedido);
    return this.http.post(`${this.apiPedido}/pedidos`,pedido, { responseType: 'text' });
  }
}
