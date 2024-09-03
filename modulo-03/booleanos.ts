// Tipos booleano são verdadeiros ou falços

let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);
console.log(typeof tarefaPendente);

let concluido: boolean = false;

if (!concluido) {
  console.log("Tarefa foi concluida com sucesso!");
} else {
  console.log("tarefa esta pendênte!");
}
