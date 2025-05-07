import { EmailValidator } from './EmailValidator';
import { PasswordValidator } from './PasswordValidator';
import { FormData } from './FormData';

const emailValidator = new EmailValidator();
const passwordValidator = new PasswordValidator();

emailValidator.setProximo(passwordValidator);

const formulario1: FormData = {
  email: 'usuario@dominio.com',
  senha: '123456'
};

const formulario2: FormData = {
  email: 'email_invalido',
  senha: '123'
};

console.log("Validação 1:");
emailValidator.validar(formulario1);

console.log("Validação 2:");
emailValidator.validar(formulario2);
