"use strict";
// Varriáves
let nome = "Galo";
console.log(nome);
//Array
let animais = ["elefante", "cachorro", " gato", "pato", "Girafa"];
console.log(animais);
animais.push("porco"); // push é um método usado para inserir dentro de uma array
console.log(animais);
const CarroNovo = {
    nome: "Toyota Yaris Sedan XS",
    cor: "Amarelo",
    ano: 2019,
};
console.log(CarroNovo);
//funções
// função calcular velocidade do carro
function velocidadeCarro(distancia, tempo) {
    if (tempo === 0) {
        throw new Error("O tempo não pode ser zero");
        // console.log("O tempo não pode ser zero");
    }
    return distancia / tempo;
}
//   função multiplicar
let num1 = 2;
let num2 = 5;
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(`O resultado da multiplicação de ${num1} por ${num2} é: ` +
    multiplicar(num1, num2));
