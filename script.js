var nome = prompt("Digite o seu nome:");
var valorEmDolar = prompt("Digite o valor em dólares:");
var cotacaoDoDolar = prompt("Digite a cotação do dólar:");

valorEmDolar = parseFloat(valorEmDolar);
cotacaoDoDolar = parseFloat(cotacaoDoDolar);

if (isNaN(valorEmDolar) || isNaN(cotacaoDoDolar)) {
  alert("Insira valores numéricos válidos.");
} else {
  var valorEmReal = valorEmDolar * cotacaoDoDolar;
  valorEmReal = valorEmReal.toFixed(2);

  var mensagem = "Olá " + nome + ", o valor em real é: R$ " + valorEmReal;

  alert(mensagem);
}
