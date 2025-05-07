import { Handler } from './Handler';

export class Gerente implements Handler {
  private proximo?: Handler;

  setProximo(handler: Handler): Handler {
    this.proximo = handler;
    return handler;
  }

  aprovar(valor: number): void {
    if (valor <= 1000) {
      console.log(`Gerente aprovou a despesa de R$ ${valor}`);
    } else if (this.proximo) {
      this.proximo.aprovar(valor);
    } else {
      console.log(`Nenhum responsável pôde aprovar R$ ${valor}`);
    }
  }
}
