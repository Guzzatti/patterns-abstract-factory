import { Handler } from './Handler';

export class Diretor implements Handler {
  private proximo?: Handler;

  setProximo(handler: Handler): Handler {
    this.proximo = handler;
    return handler;
  }

  aprovar(valor: number): void {
    if (valor <= 5000) {
      console.log(`Diretor aprovou a despesa de R$ ${valor}`);
    } else if (this.proximo) {
      this.proximo.aprovar(valor);
    } else {
      console.log(`Nenhum responsável pôde aprovar R$ ${valor}`);
    }
  }
}
