export class Pessoa {
    private nome: string;
    private anoNascimento: number;

    public constructor(_nome: string, _anoNascimento: number,) {
        this.nome = _nome;
        this.anoNascimento = _anoNascimento;
    }

    public setNome(_nome: string): void {
        this.nome = _nome;
    }

    public getNome(): string {
        return this.nome;
    }

    public setAnoNascimento(_anoNascimento: number): void {
        this.anoNascimento = _anoNascimento;
    }

    public getAnoNascimento(): number {
        return this.anoNascimento;
    }

    public getIdade(): number {
        let atual = new Date();
        let anoAtual = atual.getFullYear();
        return anoAtual - this.anoNascimento;
    }
}