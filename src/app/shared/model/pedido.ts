export class Pedido {
    //id: number = 0;
    id!: number;
    nome: string = '';
    descricao: string = '';
}

// Como faço para poder inicializar as variáveis sem atribuir valor? Para que na interface web, não apareça o "0" no id, mas que fique um campo limpo.
// Deu certo, colocando a exclamação depois do id.