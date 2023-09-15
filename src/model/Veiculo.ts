export class Veiculo {

    private tipo: string;
    private modelo: string;
    private fabricante: string;

    public constructor(_tipo: string, _modelo: string, _fabricante: string) {
        this.tipo = _tipo;
        this.modelo = _modelo;
        this.fabricante = _fabricante;
    }

    public setTipo(_tipo: string): void {
        this.tipo = _tipo;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setFabricante(_fabricante: string): void {
        this.fabricante = _fabricante;
    }

    public getFabricante(): string {
        return this.fabricante;
    }
}