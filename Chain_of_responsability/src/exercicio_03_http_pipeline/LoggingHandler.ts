import { Handler } from './Handler';
import { Request } from './Request';

export class LoggingHandler implements Handler {
  setProximo(_: Handler): Handler {
    return this;
  }

  processar(req: Request): void {
    console.log(`Log: Requisição para ${req.url} finalizada com sucesso.`);
  }
}
