// types
// interfaces

interface IAnimal {
    nome:string;
    tipo: 'terrestre' | 'aquático';

    executarRugido(alturaDecibeis: number): void;
}

interface IFelinos extends IAnimal {
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaDecibeis) => (`${alturaDecibeis}dB`)
}

animal.executarRugido(10)
    
const felino: IFelinos = {
    nome: 'Leão',
    tipo:"terrestre",
    visaoNoturna: true,
    executarRugido: (alturaDecibeis) => (`${alturaDecibeis}dB`),
}