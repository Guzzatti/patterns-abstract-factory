import { Handler } from './Handler';
import { Request } from './Request';

export class CacheHandler implements Handler {
  private proximo?: Handler;

  setProximo(handler: Handler): Handler {
    this.proximo = handler;
    return handler;
  }

  processar(req: Request): void {
    if (req.temCache) {
      console.log('Cache atendido, fim do processamento.');
      return;
    }
    console.log('sem cache, continuando...');
    this.proximo?.processar(req);
  }
}
