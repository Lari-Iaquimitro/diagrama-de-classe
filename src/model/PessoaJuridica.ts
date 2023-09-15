export class PessoaJuridica {
    private proprietario: string;
    private nomeFantasia: string;
    private cnpj: string;

    public constructor(_proprietario: string, _nomeFantasia: string, _cnpj: string) {
        this.proprietario = _proprietario;
        this.nomeFantasia = _nomeFantasia;
        this.cnpj = _cnpj;
    }

    public setProprietario(_proprietario: string): void {
        this.proprietario = _proprietario;
    }

    public getProprietario(): string {
        return this.proprietario;
    }

    public setNomeFantasia(_nomeFantasia: string): void {
        this.nomeFantasia = _nomeFantasia;
    }

    public getNomeFantasia(): string {
        return this.nomeFantasia;
    }

    public setCnpj(_cnpj: string): void {
        this.cnpj = _cnpj;
    }

    public getCnpj(): string {
        return this.cnpj;
    }

}