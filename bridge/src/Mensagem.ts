export abstract class Mensagem {
    protected assunto: string = "";
    protected mensagem: string = "";
  
    setAssunto(assunto: string): void {
      this.assunto = assunto;
    }
  
    setMensagem(msg: string): void {
      this.mensagem = msg;
    }
  
    abstract enviar(): void;
  }