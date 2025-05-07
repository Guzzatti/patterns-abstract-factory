import { Gerente } from './Gerente';
import { Diretor } from './Diretor';
import { VicePresidente } from './VicePresidente';
import { Presidente } from './Presidente';

const gerente = new Gerente();
const diretor = new Diretor();
const vice = new VicePresidente();
const presidente = new Presidente();

// Criação da cadeia
gerente.setProximo(diretor).setProximo(vice).setProximo(presidente);

// Testes
gerente.aprovar(500);     // Gerente
gerente.aprovar(3000);    // Diretor
gerente.aprovar(15000);   // Vice-presidente
gerente.aprovar(50000);   // Presidente
