function parOuImpar(valor) {
    if (valor % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let valor = parseInt(prompt("Digite um valor inteiro!"));
let resultado = parOuImpar(valor);

if (resultado) {
    alert(`${valor} é par.`);
} else {
    alert(`${valor} é ímpar.`);
}