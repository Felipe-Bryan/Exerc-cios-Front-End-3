import Entrada from './entrada';
import Saida from './saida';

interface Carteira {
  saldo: number;
  entradas: Entrada[];
  saidas: Saida[];
}

export default Carteira;
