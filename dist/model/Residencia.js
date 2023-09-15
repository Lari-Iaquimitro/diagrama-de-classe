"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Residencia = void 0;
class Residencia {
    constructor(_tipo, _quantComodos, _garagem) {
        this.tipo = _tipo;
        this.quantComodos = _quantComodos;
        this.garagem = _garagem;
    }
    setTipo(_tipo) {
        this.tipo = _tipo;
    }
    getTipo() {
        return this.tipo;
    }
    setQuantComodos(_quantComodos) {
        this.quantComodos = _quantComodos;
    }
    getQuantComodos() {
        return this.quantComodos;
    }
    setGaragem(_garagem) {
        this.garagem = _garagem;
    }
    getGaragem() {
        return this.garagem;
    }
}
exports.Residencia = Residencia;
//# sourceMappingURL=Residencia.js.map