import { Animal } from "./Animal";

class Preguica extends Animal{
    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    public emiteSom(): void{
        console.log(`O ${this.nome} está emitindo um som!`);
    }

    public sobeArvore(): void{
        console.log(`O ${this.nome} está subindo na árvore!`);
    }
}
export{Preguica};