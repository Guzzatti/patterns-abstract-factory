import { Request } from './Request';

export interface Handler {
  setProximo(handler: Handler): Handler;
  processar(req: Request): void;
}
