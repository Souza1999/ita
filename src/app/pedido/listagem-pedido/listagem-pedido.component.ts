import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pedido } from 'src/app/shared/model/pedido';
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-listagem-pedido',
  templateUrl: './listagem-pedido.component.html',
  styleUrls: ['./listagem-pedido.component.scss']
})
export class ListagemPedidoComponent implements OnInit {

  pedidos: Array<Pedido> = [];  // É o seguinte, o professor deixou passar esse erro, mas pesquisei e vi que basta colocar esses colchetes. Então ficar atento se isso pode dar problema.
  
  // O código do professor tá só usuarios: Array<Usuario>; Não sei como ele conseguiu.
  // Coloquei pedidos!: Pedido[]; mas o erro de conexão ainda continuou.

  titulo = "Listagem de Pedidos";
  
  constructor(private pedidoService: PedidoService, private roteador: Router) {
    
  }
  
  // O ngOnInit serve para eu colocar dentro dele os próximos passos depois que tudo já estiver criado
  ngOnInit(): void {
    this.pedidoService.listar().subscribe(pedidos => this.pedidos = pedidos);
  }

  // Descobri que o import automático é ctrl + .
  editar(pedido: Pedido): void{
    this.roteador.navigate(['cadastro-pedido', pedido.id]);
  }

  remover(pedido: Pedido): void{
    this.pedidoService.remover(pedido.id).subscribe(
      resposta => {
        const indxPedidoARemover = this.pedidos.findIndex(p => p.id === pedido.id)      // Poderia fazer com o nome também, mas depois faço isso.
        if (indxPedidoARemover > -1){
          this.pedidos.splice(indxPedidoARemover, 1);                                   //Isso ficou meio estranho, mas nas férias vejo como melhorar.
        }
      }
    );
    
  }

  // Com o two-way data bind, este método abaixo não é mais necessário
  alterarTitulo(novoTitulo: string): void{
    this.titulo = novoTitulo;
  }
}
