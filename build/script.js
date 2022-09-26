"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cachorro_1 = require("./Cachorro");
var Cavalo_1 = require("./Cavalo");
var Preguica_1 = require("./Preguica");
var cachorro = new Cachorro_1.Cachorro('Toddy', 7);
var cavalo = new Cavalo_1.Cavalo('Chico', 15);
var preguica = new Preguica_1.Preguica('Soneca', 6);
function emitirSom(animal) {
    animal.emiteSom();
}
function correr(animal) {
    animal.corre();
}
function subir(animal) {
    animal.sobeArvore();
}
emitirSom(cachorro);
correr(cachorro);
emitirSom(cavalo);
correr(cavalo);
emitirSom(preguica);
subir(preguica);
