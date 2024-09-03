let num3: number = 23.0;
let num4: number = 0o577;
let num5: number = 0b110001;
var valorHexadecimal: number = 0x78cf;

console.log(typeof valorHexadecimal);
console.log(valorHexadecimal);

console.log("Number - Ponto Flutuante...: ", num3);

console.log(`Valor em decimal: ${valorHexadecimal}`);
console.log(`Valor em hexadecimanl: ${valorHexadecimal.toString(16)}`);

console.log("Number - Octal...: ", num4);
console.log("Number - Binário...: ", num5);
