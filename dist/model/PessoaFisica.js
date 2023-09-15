"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaFisica = void 0;
class PessoaFisica {
    constructor(_nome, _cpf) {
        this.nome = _nome;
        this.cpf = _cpf;
    }
    setNome(_nome) {
        this.nome = _nome;
    }
    getNome() {
        return this.nome;
    }
    setCPF(_cpf) {
        this.cpf = _cpf;
    }
    getCPF() {
        return this.cpf;
    }
}
exports.PessoaFisica = PessoaFisica;
//# sourceMappingURL=PessoaFisica.js.map