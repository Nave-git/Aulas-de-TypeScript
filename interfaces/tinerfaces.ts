interface Humano {
  nome: string; // Atributo obrigatório
  idade?: number; // Atributo opcional
  [prop: string]: any; // Propiedade com o nome dinâmico.
  saudar(sobrenome: string): void;
}

const pessoa: Humano = {
  nome: "João",
  idade: 27,
  saudar(sobrenome: string) {
    console.log("Ola, meu nome é " + this.nome + " " + sobrenome);
  },
};

function mudarNome(pessoa: Humano) {
  pessoa.nome = "Joana";
}

function saudarComOla(pessoa: Humano) {
  console.log("Olá," + " " + pessoa.nome + " " + pessoa.idade);
}

saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
// saudarComOla({ nome: "natalha", idade: 27, altura: 1.65 });
pessoa.saudar("Bianca");

class Cliente implements Humano {
  nome = "";
  UltimaCompra: Date = new Date();
  saudar(sobrenome: string): void {
    console.log("Olá, meu nome é " + this.nome + " " + sobrenome);
  }
}

const meuCliente = new Cliente();
meuCliente.nome = "Pedro";
saudarComOla(meuCliente);
meuCliente.saudar("Bianchi");
console.log(meuCliente.UltimaCompra);
