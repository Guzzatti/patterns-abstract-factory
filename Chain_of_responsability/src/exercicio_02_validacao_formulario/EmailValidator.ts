import { Handler } from './Handler';
import { FormData } from './FormData';

export class EmailValidator implements Handler {
  private proximo?: Handler;

  setProximo(handler: Handler): Handler {
    this.proximo = handler;
    return handler;
  }

  validar(dados: FormData): void {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(dados.email)) {
      console.log("Email inválido.");
      return;
    }
    if (this.proximo) {
      this.proximo.validar(dados);
    }
  }
}
