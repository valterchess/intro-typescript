/* const input = document.getElementById('input') as HTMLInputElement;
 input.addEventListener('input', (event) => {
     const i = event.currentTarget as HTMLInputElement;
     console.log(i.value);
 }) */

//**************************************************** */

// Generic types

/*  function adicionaApendiceALista<T>(array:any[], valor:T){
     return array.map(() => valor);
  }

  adicionaApendiceALista([1, 2, 3], 'd');*/

//**************************************************** */

// Desenvollvendo Condicionais a partir de parâmetros

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionário' | 'supervisor' | 'coordenador' | 'gerente'; // dado opcional
}

/*interface IAdmin extends IUsuario{
    cargo: 'supervisor' | 'coordenador' | 'gerente';
}*/

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar(usuario.cargo);
    }

    // redirieciona para a área do usuário
}
//**************************************************** */

//Criando variáveis com propriedade readonly e private

interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string; // valor opcional
}

//definindo os valores de Cachorro apenas como leitura, na hora da implementação
type CachorroSomenteLeitura = {
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}
class MeuCachorro implements CachorroSomenteLeitura {
     idade;
     nome;
     parqueFavorito;

    constructor(nome, idade) {
        this.idade = idade;
        this.nome = nome;
    }
}

const cao = new MeuCachorro('Apolo', 3);
cao.idade = 8;                                      
console.log(cao);