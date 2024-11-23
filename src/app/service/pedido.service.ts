import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../interface/product";

@Injectable({
  providedIn: 'root'
})

export class PedidoService {
  private apiUrl = 'http://localhost:8080/api/cardapio'; // Ajuste para sua URL
  constructor(private http: HttpClient) {}

  getPratosDoDia(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/hoje`);
  }
  salvarPedido(pedido: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pedidos`, pedido);
  }
}
