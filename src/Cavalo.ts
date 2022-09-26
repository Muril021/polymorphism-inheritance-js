import { Animal } from "./Animal";

class Cavalo extends Animal{
    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    public emiteSom(): void{
        console.log(`O ${this.nome} está rinchando!`);
    }

    public corre(): void{
        console.log(`O ${this.nome} está correndo!`);
    }
}
export{Cavalo};