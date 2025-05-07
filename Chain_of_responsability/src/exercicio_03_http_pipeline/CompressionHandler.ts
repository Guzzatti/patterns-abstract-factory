import { Handler } from './Handler';
import { Request } from './Request';

export class CompressionHandler implements Handler {
  private proximo?: Handler;

  setProximo(handler: Handler): Handler {
    this.proximo = handler;
    return handler;
  }

  processar(req: Request): void {
    if (req.compressaoHabilitada) {
      console.log('Comprimindo resposta...');
    } else {
      console.log('Sem compressão habilitada.');
    }
    this.proximo?.processar(req);
  }
}
