import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Pedido} from 'src/app/shared/model/pedido'; //tive que importar isso aqui porque continuava com o erro, mas o professor não mostrou isso no vídeo
import { PedidoService } from 'src/app/shared/services/pedido.service';

@Component({
  selector: 'app-cadastro-pedido',
  templateUrl: './cadastro-pedido.component.html',
  styleUrls: ['./cadastro-pedido.component.scss']
})
export class CadastroPedidoComponent implements OnInit {
  
  pedido: Pedido;

  constructor(private pedidoService: PedidoService, private rotaAtual: ActivatedRoute, private roteador: Router){
    this.pedido = new Pedido();
    if (this.rotaAtual.snapshot.paramMap.has('id')) {
      const idParaEdicao = Number(this.rotaAtual.snapshot.paramMap.get('id'));
      // Pegar, do banco de dados, o pedido cujo id é igual ao idParaEdicao.
      this.pedidoService.pesquisarPorId(idParaEdicao).subscribe(
        pedidoRetornado => this.pedido = pedidoRetornado
      );
    }
  }

  ngOnInit(): void {
    
  }

  // É o seguinte: o json-server tá tudo certo, é só não inserir o ID, porque o ID tá auto-incremental.
  inserirPedido(): void {
    if (this.pedido.id) {
      this.pedidoService.atualizar(this.pedido).subscribe(
        pedidoAlterado => {
          console.log(pedidoAlterado);
          this.roteador.navigate(['listagem-pedido']);
        }
      );
    } else {
      this.pedidoService.inserir(this.pedido).subscribe(
        pedidoInserido => {
          console.log(pedidoInserido);
          this.roteador.navigate(['listagem-pedido']);
        }
      );
    }
  }
}

