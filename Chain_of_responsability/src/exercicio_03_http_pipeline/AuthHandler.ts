import { Handler } from './Handler';
import { Request } from './Request';

export class AuthHandler implements Handler {
  private proximo?: Handler;

  setProximo(handler: Handler): Handler {
    this.proximo = handler;
    return handler;
  }

  processar(req: Request): void {
    if (!req.autenticado) {
      console.log('requisição negada: não autenticado.');
      return;
    }
    console.log('Autenticação OK');
    this.proximo?.processar(req);
  }
}
