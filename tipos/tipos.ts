// string

let node = "Pedro"; // o compilador subentende que é uma string
console.log(node);

//numbers
let idade = 27;
// idade = 'Ana'
// idade = 27.5;
console.log(idade);

// boolean
let possuiHobbies = false;
// possuiHobbies = 1
console.log(possuiHobbies);

//tipos explícitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
// minhaIdade = "27";
console.log(typeof minhaIdade);

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);

hobbies = [100, 200.5];
console.log(hobbies);

// tuplas --> Array de tipos prédefinidos

let endereco: [string, number, string] = ["Av Principal", 99, "bloco A"];
console.log(endereco);

endereco = ["Rua do varadouro", 120, "bloco C"];
console.log(endereco);

// Enum: abreviação de "enumeration" tipo especial de conjunto de constantes

enum Cor {
  Cinza,
  Verde = 100,
  Azul = 2,
  Laranja,
  Amarelo = 9,
  Vermelho = 100,
}

let minhaCor: Cor = Cor.Verde;
console.log(minhaCor);

console.log(Cor.Vermelho);
console.log(Cor.Cinza);
console.log(Cor.Amarelo);
console.log(Cor.Laranja);

// any

let carro: any = "BMW";
console.log(carro);

type carro = {
  marca: string;
  ano: number;
};

console.log(carro);
