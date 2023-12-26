import { Component } from '@angular/core';
import { Pedido } from 'src/app/shared/model/pedido';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulozinho = 'I Take Away';
  descricaozinha = 'Faça seu pedido!';

  constructor(){
  }
}
