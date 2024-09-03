"use strict";
const pessoa = {
    nome: "João",
    idade: 27,
    saudar(sobrenome) {
        console.log("Ola, meu nome é " + this.nome + " " + sobrenome);
    },
};
function mudarNome(pessoa) {
    pessoa.nome = "Joana";
}
function saudarComOla(pessoa) {
    console.log("Olá," + " " + pessoa.nome + " " + pessoa.idade);
}
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "natalha", idade: 27, altura: 1.65 });
pessoa.saudar("Bianca");
class Cliente {
    constructor() {
        this.nome = "";
        this.UltimaCompra = new Date();
    }
    saudar(sobrenome) {
        console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = "Pedro";
saudarComOla(meuCliente);
meuCliente.saudar("Bianchi");
console.log(meuCliente.UltimaCompra);
