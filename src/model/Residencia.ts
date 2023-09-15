export class Residencia {

    private tipo: string;
    private quantComodos: string;
    private garagem: boolean;

    public constructor(_tipo: string, _quantComodos: string, _garagem: boolean) {
        this.tipo = _tipo;
        this.quantComodos = _quantComodos;
        this.garagem = _garagem;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setQuantComodos(_quantComodos: string): void {
        this.quantComodos = _quantComodos;
    }

    public getQuantComodos(): string {
        return this.quantComodos;
    }

    public setGaragem(_garagem: boolean): void {
        this.garagem = _garagem;
    }

    public getGaragem(): boolean {
        return this.garagem;
    }
}