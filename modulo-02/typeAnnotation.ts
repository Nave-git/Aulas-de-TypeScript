// Varriáves
let nome: string = "Galo";
console.log(nome);

//Array
let animais: string[] = ["elefante", "cachorro", " gato", "pato", "Girafa"];
console.log(animais);

animais.push("porco"); // push é um método usado para inserir dentro de uma array

console.log(animais);

//Objeto interface
interface carroNovo {
  nome: string;
  cor: string;
  ano: number;
  velocidade?: (distancia: number, tempo: number) => number;
}

const CarroNovo: carroNovo = {
  nome: "Toyota Yaris Sedan XS",
  cor: "Amarelo",
  ano: 2019,
};
console.log(CarroNovo);

//funções

// função calcular velocidade do carro

function velocidadeCarro(distancia: number, tempo: number): number {
  if (tempo === 0) {
    throw new Error("O tempo não pode ser zero");
    // console.log("O tempo não pode ser zero");
  }
  return distancia / tempo;
}

//   função multiplicar
let num1: number = 2;
let num2: number = 5;
function multiplicar(num1: number, num2: number) {
  return num1 * num2;
}
console.log(
  `O resultado da multiplicação de ${num1} por ${num2} é: ` +
    multiplicar(num1, num2)
);
