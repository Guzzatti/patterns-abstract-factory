import { Mensagem } from "./Mensagem";

export class MensagemAdminSMS extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo ADMINISTRADOR");
    console.log("=== Mensagem enviada por SMS ===");
    console.log(`ASSUNTO: ${this.assunto}`);
    console.log(`MENSAGEM: ${this.mensagem}`);
    console.log("");
  }
}