import { Mensagem } from "./Mensagem";

export class MensagemUsuarioSMS extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo USUARIO");
    console.log("=== Mensagem enviada por SMS ===");
    console.log(`ASSUNTO: ${this.assunto}`);
    console.log(`MENSAGEM: ${this.mensagem}`);
    console.log("");
  }
}