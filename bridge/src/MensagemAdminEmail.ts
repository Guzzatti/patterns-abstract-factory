import { Mensagem } from "./Mensagem";

export class MensagemAdminEmail extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo ADMINISTRADOR");
    console.log("=== Mensagem enviada por E-MAIL ===");
    console.log(`ASSUNTO: ${this.assunto}`);
    console.log(`MENSAGEM: ${this.mensagem}`);
    console.log("");
  }
}