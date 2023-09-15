"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(_tipo, _modelo, _fabricante) {
        this.tipo = _tipo;
        this.modelo = _modelo;
        this.fabricante = _fabricante;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    getTipo() {
        return this.tipo;
    }
    setModelo(_modelo) {
        this.modelo = _modelo;
    }
    getModelo() {
        return this.modelo;
    }
    setFabricante(_fabricante) {
        this.fabricante = _fabricante;
    }
    getFabricante() {
        return this.fabricante;
    }
}
exports.Veiculo = Veiculo;
//# sourceMappingURL=Veiculo.js.map