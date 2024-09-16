function primo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  let numero = parseInt(prompt("Digite um número inteiro e positivo:"));
  let resultado = primo(numero);
  
  if (resultado) {
    console.log(`Verdadeiro! ${numero} é primo.`);
  } else {
    console.log(`Falso! ${numero} não é primo.`);
  }