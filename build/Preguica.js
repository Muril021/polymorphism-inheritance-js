"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Preguica = void 0;
var Animal_1 = require("./Animal");
var Preguica = /** @class */ (function (_super) {
    __extends(Preguica, _super);
    function Preguica(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    Preguica.prototype.emiteSom = function () {
        console.log("O ".concat(this.nome, " est\u00E1 emitindo um som!"));
    };
    Preguica.prototype.sobeArvore = function () {
        console.log("O ".concat(this.nome, " est\u00E1 subindo na \u00E1rvore!"));
    };
    return Preguica;
}(Animal_1.Animal));
exports.Preguica = Preguica;
