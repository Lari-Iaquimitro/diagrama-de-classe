"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaJuridica = void 0;
class PessoaJuridica {
    constructor(_proprietario, _nomeFantasia, _cnpj) {
        this.proprietario = _proprietario;
        this.nomeFantasia = _nomeFantasia;
        this.cnpj = _cnpj;
    }
    setProprietario(_proprietario) {
        this.proprietario = _proprietario;
    }
    getProprietario() {
        return this.proprietario;
    }
    setNomeFantasia(_nomeFantasia) {
        this.nomeFantasia = _nomeFantasia;
    }
    getNomeFantasia() {
        return this.nomeFantasia;
    }
    setCnpj(_cnpj) {
        this.cnpj = _cnpj;
    }
    getCnpj() {
        return this.cnpj;
    }
}
exports.PessoaJuridica = PessoaJuridica;
//# sourceMappingURL=PessoaJuridica.js.map