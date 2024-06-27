// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

let contador = 0;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.

let contador2 = 10;
while (contador2 >= 0) {
  console.log(contador2);
  contador2--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

const botão1 = document.querySelector("button");
const botão2 = document.getElementById("botao2");

function iniciarContagemRegressiva() {
  let numero = prompt("Digite um número de 0 a 100");
  if (numero > 0 && numero < 100) {
    while (numero >= 0) {
      console.log(numero);
      numero--;
    }
  }
}

botão1.addEventListener("click", iniciarContagemRegressiva);

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

function iniciarContagem() {
  let numero = prompt("Digite um número de 0 a 100");
  if (numero > 0 && numero < 100) {
    let i = 0;
    while (i != numero) {
      i++;
      console.log(i);
    }
  }
}

botão2.addEventListener("click", iniciarContagem);
