export class Livro {
    private titulo: string;
    private editora: string;
    private autor: string;

    public constructor(_titulo: string, _editora: string, _autor: string) {
        this.titulo = _titulo;
        this.editora = _editora;
        this.autor = _autor;
    }

    public setTitulo(_titulo: string): void {
        this.titulo = _titulo;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setEditora(_editora: string): void {
        this.editora = _editora;
    }

    public getEditora(): string {
        return this.editora;
    }

    public setAutor(_autor: string): void {
        this.autor = _autor;
    }

    public getAutor(): string {
        return this.autor;
    }
}