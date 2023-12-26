import { Injectable } from '@angular/core';
import { Pedido } from '../model/pedido';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  URL_PEDIDOS = 'http://localhost:3000/pedidos'; // A porta 3000 é para o json-server e a porta 8080 é para o spring boot!

  constructor(private httpCLient: HttpClient) {

  }

  // Rapaz, tava dando tudo errado, mas pulei o vídeo e fui pra parte de Observable. Aí deu certo.
  listar(): Observable<Pedido[]>{
    return this.httpCLient.get<Pedido[]>(this.URL_PEDIDOS);
  }

  inserir(pedido: Pedido): Observable<Pedido>{
    return this.httpCLient.post<Pedido>(this.URL_PEDIDOS, pedido);
  }

  remover(id: number): Observable<object> {
    return this.httpCLient.delete(`${this.URL_PEDIDOS}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Pedido>{
    return this.httpCLient.get<Pedido>(`${this.URL_PEDIDOS}/${id}`);
  }

  atualizar(pedido: Pedido): Observable<Pedido> {
    return this.httpCLient.put<Pedido>(`${this.URL_PEDIDOS}/${pedido.id}`, pedido);
  }
}
