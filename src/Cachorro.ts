import { Animal } from "./Animal";
import { corre } from "./corre";
import { emiteSom } from "./emiteSom";

class Cachorro extends Animal implements emiteSom, corre{

    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    public emiteSom(): void{
        console.log(`O ${this.nome} está latindo!`);
    }

    public corre(): void{
        console.log(`O ${this.nome} está correndo!`);
    }
}
export{Cachorro};