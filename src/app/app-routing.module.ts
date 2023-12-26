import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Tenho que importar manualmente os componentes da rota, porque a IDE não fez isso.
import { CadastroPedidoComponent } from "./pedido/cadastro-pedido/cadastro-pedido.component";
import { ListagemPedidoComponent } from "./pedido/listagem-pedido/listagem-pedido.component";

const routes: Routes = [
  {
    path: 'cadastro-pedido', // Esse path aqui é o que vai na URL, que inclusive posso inserir diretamente lá.
    component: CadastroPedidoComponent
  },
  {
    path: 'cadastro-pedido/:id',
    component: CadastroPedidoComponent
  },
  {
    path: 'listagem-pedido',
    component: ListagemPedidoComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
