import { Mensagem } from "./Mensagem";

export class MensagemUsuarioEmail extends Mensagem {
  enviar(): void {
    console.log("Mensagem enviada pelo USUARIO");
    console.log("=== Mensagem enviada por E-MAIL ===");
    console.log(`ASSUNTO: ${this.assunto}`);
    console.log(`MENSAGEM: ${this.mensagem}`);
    console.log("");
  }
}