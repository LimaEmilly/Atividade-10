function calculaMedia(nota1, nota2, nota3, letra) {
    let media;

    if (letra === "A") {
        media = (nota1 + nota2 + nota3) / 3;
    } else if (letra === "P") {
        media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
    } else {
        console.log("Insira uma letra válida");
        return; 
    }

    return media;
}

let nota1 = parseFloat(prompt("Digite a primeira nota do aluno:"));
let nota2 = parseFloat(prompt("Digite a segunda nota do aluno:"));
let nota3 = parseFloat(prompt("Digite a terceira nota do aluno:"));
let letra = prompt("Digite A para média aritmética ou P para média ponderada:").toUpperCase();

let resultado = calculaMedia(nota1, nota2, nota3, letra);
if (resultado !== undefined) {
    console.log("A média do aluno é:", resultado.toFixed(2));
}