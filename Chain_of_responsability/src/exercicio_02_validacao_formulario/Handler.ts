import { FormData } from './FormData';

export interface Handler {
  setProximo(handler: Handler): Handler;
  validar(dados: FormData): void;
}
