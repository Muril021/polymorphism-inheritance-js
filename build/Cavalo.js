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
exports.Cavalo = void 0;
var Animal_1 = require("./Animal");
var Cavalo = /** @class */ (function (_super) {
    __extends(Cavalo, _super);
    function Cavalo(nome, idade) {
        return _super.call(this, nome, idade) || this;
    }
    Cavalo.prototype.emiteSom = function () {
        console.log("O ".concat(this.nome, " est\u00E1 rinchando!"));
    };
    Cavalo.prototype.corre = function () {
        console.log("O ".concat(this.nome, " est\u00E1 correndo!"));
    };
    return Cavalo;
}(Animal_1.Animal));
exports.Cavalo = Cavalo;
