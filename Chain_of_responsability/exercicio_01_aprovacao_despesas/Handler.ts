export interface Handler {
    setProximo(handler: Handler): Handler;
    aprovar(valor: number): void;
  }
  