import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroPedidoComponent } from './cadastro-pedido/cadastro-pedido.component';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { ListagemPedidoComponent } from './listagem-pedido/listagem-pedido.component';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    CadastroPedidoComponent,
    ListagemPedidoComponent,
  ],

  exports: [
    CadastroPedidoComponent,
    ListagemPedidoComponent, // tem que exportar aqui manualmente, porque não tá funcionando o automático
  ],

  imports: [
    BrowserAnimationsModule,
    CommonModule,         // removi o BrowserModule, pois ele já está no app.module e de acordo com o Bard, essa redundância pode gerar conflito.
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,      // o FlexLayoutModule está obsoleto, então resolvi fazer esse.
  ]
})
export class PedidoModule { }
