export class PessoaFisica {
    private nome: string;
    private cpf: string;

    public constructor(_nome: string, _cpf: string) {
        this.nome = _nome;
        this.cpf = _cpf;
    }

    public setNome(_nome: string) {
        this.nome = _nome;
    }

    public getNome() {
        return this.nome;
    }

    public setCPF(_cpf: string) {
        this.cpf = _cpf;
    }

    public getCPF() {
        return this.cpf;
    }
}