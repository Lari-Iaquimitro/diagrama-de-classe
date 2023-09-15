"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
class Carro {
    constructor(_marca, _modelo, _cor) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.cor = _cor;
    }
    setMarca(_marca) {
        this.marca = _marca;
    }
    getMarca() {
        return this.marca;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getModelo() {
        return this.modelo;
    }
    setCor(_cor) {
        this.cor = _cor;
    }
    getCor() {
        return this.cor;
    }
}
exports.Carro = Carro;
//# sourceMappingURL=Carro.js.map