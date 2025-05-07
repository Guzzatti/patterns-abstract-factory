import { Handler } from './Handler';
import { FormData } from './FormData';

export class PasswordValidator implements Handler {
  private proximo?: Handler;

  setProximo(handler: Handler): Handler {
    this.proximo = handler;
    return handler;
  }

  validar(dados: FormData): void {
    if (dados.senha.length < 6) {
      console.log("Senha deve ter pelo menos 6 caracteres.");
      return;
    }
    if (this.proximo) {
      this.proximo.validar(dados);
    } else {
      console.log("Dados válidos! Cadastro pode prosseguir.");
    }
  }
}
