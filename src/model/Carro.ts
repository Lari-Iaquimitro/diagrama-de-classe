export class Carro {

    private marca: string;
    private modelo: string;
    private cor: string;

    public constructor(_marca: string, _modelo: string, _cor: string) {
        this.marca = _marca;
        this.modelo = _modelo;
        this.cor = _cor;
    }

    public setMarca(_marca: string): void {
        this.marca = _marca;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    }

    public getModelo(): string {
        return this.modelo;
    }

    public setCor(_cor: string): void {
        this.cor = _cor;
    }

    public getCor(): string {
        return this.cor;
    }
}