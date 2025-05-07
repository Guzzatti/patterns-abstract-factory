import { Handler } from './Handler';

export class Presidente implements Handler {
  setProximo(_: Handler): Handler {
    return this;
  }

  aprovar(valor: number): void {
    console.log(`Presidente aprovou a despesa de R$ ${valor}`);
  }
}
