import { Cachorro } from "./Cachorro";
import { Cavalo } from "./Cavalo";
import { Preguica } from "./Preguica";
import { emiteSom } from "./emiteSom";
import { corre } from "./corre";
import { sobeArvore } from "./sobeArvore";


const cachorro = new Cachorro ('Toddy', 7);
const cavalo = new Cavalo ('Chico', 15);
const preguica = new Preguica ('Soneca', 6);

function emitirSom(animal:emiteSom){
    animal.emiteSom();
}

function correr(animal:corre){
    animal.corre();
}

function subir(animal:sobeArvore){
    animal.sobeArvore();
}

emitirSom(cachorro);
correr(cachorro);
emitirSom(cavalo);
correr(cavalo);
emitirSom(preguica);
subir(preguica);