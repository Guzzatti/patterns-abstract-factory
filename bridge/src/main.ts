import { Mensagem } from "./Mensagem";
import { MensagemAdminEmail } from "./MensagemAdminEmail";
import { MensagemAdminSMS } from "./MensagemAdminSMS";
import { MensagemUsuarioEmail } from "./MensagemUsuarioEmail";
import { MensagemUsuarioSMS } from "./MensagemUsuarioSMS";

let mensagem: Mensagem = new MensagemAdminEmail();
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Hello Admin!");
mensagem.enviar();

mensagem = new MensagemAdminSMS();
mensagem.setAssunto("Primeira mensagem");
mensagem.setMensagem("Hello Admin!");
mensagem.enviar();

mensagem = new MensagemUsuarioEmail();
mensagem.setAssunto("Segunda mensagem");
mensagem.setMensagem("Hello Admin!");
mensagem.enviar();

mensagem = new MensagemUsuarioSMS();
mensagem.setAssunto("Segunda mensagem");
mensagem.setMensagem("Hello Admin!");
mensagem.enviar();