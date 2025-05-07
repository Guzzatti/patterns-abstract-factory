import { AuthHandler } from './AuthHandler';
import { CacheHandler } from './CacheHandler';
import { CompressionHandler } from './CompressionHandler';
import { LoggingHandler } from './LoggingHandler';
import { Request } from './Request';

const auth = new AuthHandler();
const cache = new CacheHandler();
const compress = new CompressionHandler();
const log = new LoggingHandler();

auth.setProximo(cache).setProximo(compress).setProximo(log);

const req1: Request = {
  autenticado: true,
  temCache: false,
  compressaoHabilitada: true,
  url: '/api/dados'
};

console.log("🚀 Requisição 1:");
auth.processar(req1);

const req2: Request = {
  autenticado: false,
  temCache: false,
  compressaoHabilitada: true,
  url: '/api/private'
};

console.log("\Requisição 2:");
auth.processar(req2);

const req3: Request = {
  autenticado: true,
  temCache: true,
  compressaoHabilitada: false,
  url: '/api/cacheado'
};

console.log("\Requisição 3:");
auth.processar(req3);
