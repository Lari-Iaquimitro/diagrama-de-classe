import { Carro } from "../model/Carro";
import { Veiculo } from "../model/Veiculo";
import { PessoaFisica } from "../model/PessoaFisica";
import { Livro } from "../model/Livro";
import { Residencia } from "../model/Residencia";
import { PessoaJuridica } from "../model/PessoaJuridica";
import { Pessoa } from "../model/Pessoa";

console.log(``);
console.log(`Classe Carro:`);

let c1 = new Carro(`Fiat`, `Mobi`, `Branco`);

console.log(`Marca: ${c1.getMarca()}`);
console.log(`Modelo: ${c1.getModelo()}`);
console.log(`Cor: ${c1.getCor()}`);

console.log(``);
console.log(`Objeto alterado:`);
c1.setMarca(`Chevrolet`);
c1.setModelo(`Prisma`);
c1.setCor(`Preto`);

console.log(`Marca: ${c1.getMarca()}`);
console.log(`Modelo: ${c1.getModelo()}`);
console.log(`Cor: ${c1.getCor()}`);

console.log(``);
console.log(`Classe: Veículo:`);
let v1 = new Veiculo(`Moto`, `PCX`, `Honda`);

console.log(`Tipo: ${v1.getTipo()}`);
console.log(`Modelo: ${v1.getModelo()}`);
console.log(`Fabricante: ${v1.getFabricante()}`);

console.log(``);
console.log(`objeto alterado`);
v1.setTipo(`Bicicleta`);
v1.setModelo(`Vulcano`);
v1.setFabricante(`Caloi`);

console.log(`Tipo: ${v1.getTipo()}`);
console.log(`Modelo: ${v1.getModelo()}`);
console.log(`Fabricante: ${v1.getFabricante()}`);

console.log(``);
console.log(`Classe PessoaFisica:`);

let pf = new PessoaFisica(`Larissa Iaquimitro Ravanelli`, `123.321.231-01`);

console.log(`Nome: ${pf.getNome()}`);
console.log(`CPF: ${pf.getCPF()}`);

console.log(``);
console.log(`Objeto alterado:`)
pf.setNome(`Julieta Castro Ferreira`);
pf.setCPF(`228.910.753-07`);

console.log(`Nome: ${pf.getNome()}`);
console.log(`CPF: ${pf.getCPF()}`);

console.log(``);
console.log(`Classe Livro:`);

let l1 = new Livro(`Lady Killers`, `Dark Side`, `Tori Telfer`);

console.log(`Título: ${l1.getTitulo()}`);
console.log(`Editora: ${l1.getEditora()}`);
console.log(`Autor: ${l1.getAutor()}`);

console.log(``);
console.log(`Objeto alterado:`)
l1.setTitulo(`Harry Potter`);
l1.setEditora(`Galera`);
l1.setAutor(`J.K Rowling`);

console.log(`Título: ${l1.getTitulo()}`);
console.log(`Editora: ${l1.getEditora()}`);
console.log(`Autor: ${l1.getAutor()}`);

console.log(``);
console.log(`Classe Residencia:`);

let r1 = new Residencia(`Casa`, `8`, true);

console.log(`Tipo: ${r1.getTipo()}`);
console.log(`Quantidade de Comôdos: ${r1.getQuantComodos()}`);
console.log(`Garagem: ${r1.getGaragem()}`);

console.log(``);
console.log(`Objeto alterado:`);
r1.setTipo(`Apartamento`);
r1.setQuantComodos(`5`);
r1.setGaragem(false);

console.log(`Tipo: ${r1.getTipo()}`);
console.log(`Quantidade de Comôdos: ${r1.getQuantComodos()}`);
console.log(`Garagem: ${r1.getGaragem()}`);

console.log(``);
console.log(`Classe PessoaJurídica:`);

let pj = new PessoaJuridica(`Larissa`, `Lari`, `00.123.321/0001-12`);

console.log(`Proprietário: ${pj.getProprietario()}`);
console.log(`Nome Fantasia: ${pj.getNomeFantasia()}`);
console.log(`CNPJ: ${pj.getCnpj()}`);

console.log(``);
console.log(`Objeto alterado:`);
pj.setProprietario(`Evelyn Dias Barros`);
pj.setNomeFantasia(`Evy`);
pj.setCnpj(`24.234.324/3451-14`);

console.log(`Tipo: ${r1.getTipo()}`);
console.log(`Quantidade de Comôdos: ${r1.getQuantComodos()}`);
console.log(`Garagem: ${r1.getGaragem()}`);

console.log(``);
let p1 = new Pessoa(`Larissa Iaquimitro Ravanelli`, 2006);

const idade = p1.getIdade();

console.log(``);
console.log(`Classe Pessoa:`);
console.log(`Nome: ${p1.getNome()}`);
console.log(`Ano de Nascimento: ${p1.getAnoNascimento()}`);
console.log(`Idade: ${idade} anos`);