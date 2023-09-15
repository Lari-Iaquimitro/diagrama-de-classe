"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
class Livro {
    constructor(_titulo, _editora, _autor) {
        this.titulo = _titulo;
        this.editora = _editora;
        this.autor = _autor;
    }
    setTitulo(_titulo) {
        this.titulo = _titulo;
    }
    getTitulo() {
        return this.titulo;
    }
    setEditora(_editora) {
        this.editora = _editora;
    }
    getEditora() {
        return this.editora;
    }
    setAutor(_autor) {
        this.autor = _autor;
    }
    getAutor() {
        return this.autor;
    }
}
exports.Livro = Livro;
//# sourceMappingURL=Livro.js.map