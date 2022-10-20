import { Carteira, Entrada, Saida } from './types';

let contadorEntradas: number = 0;
let contadorSaidas: number = 0;
const taxa: number = 1.5;

let conta: Carteira = {
  saldo: 0,
  entradas: [],
  saidas: [],
};

function novaEntrada(valor: number, remetente: string): void {
  contadorEntradas++;

  const entrada: Entrada = {
    id: contadorEntradas,
    valor: valor,
    data: Date.now(),
    remetente: remetente,
  };

  conta.entradas.push(entrada);
  conta.saldo += valor;

  console.log('-----------------------------------------------\n');
  console.log(conta);
  console.log('\n-----------------------------------------------\n');
}

function novaSaida(valor: number, destinatario: string): void {
  const saque: number = valor + taxa;
  const novoSaldo: number = conta.saldo - saque;

  if (novoSaldo < 0) {
    console.log('-----------------------------------------------\n');
    console.log('Saldo insuficiente para a operação');
    console.log('\n-----------------------------------------------\n');
  } else {
    contadorSaidas++;

    const saida: Saida = {
      id: contadorSaidas,
      taxa: taxa,
      valor: valor,
      data: Date.now(),
      destinatario: destinatario,
    };

    conta.saidas.push(saida);
    conta.saldo = novoSaldo;
    console.log('-----------------------------------------------\n');
    console.log(conta);
    console.log('\n-----------------------------------------------\n');
  }
}

novaEntrada(2000, 'Pagamento');
novaEntrada(100, 'Devolução');
novaSaida(2500, 'Energia'); // Falha - saldo insuficiente
novaSaida(100, 'Internet');
novaSaida(600, 'Carro');
novaSaida(700, 'Supermercado');
novaSaida(400, 'Passeio');
novaSaida(400, 'Churrasco'); // Falha - saldo insuficiente
