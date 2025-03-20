let valor01, valor02, somar, subtrair, multiplicar, dividir;

function soma()
{
valor01 = document.getElementById('valor01').value;
valor02 = document.getElementById('valor02').value;

valor01 = parseInt(valor01)
valor02 = parseInt(valor02)

somar = valor01 + valor02;

document.getElementById('ValorResultado').innerHTML = somar;
}


function sub()
{
valor01 = document.getElementById('valor01').value;
valor02 = document.getElementById('valor02').value;

valor01 = parseInt(valor01)
valor02 = parseInt(valor02)

subtrair = valor01 - valor02;

document.getElementById('ValorResultado').innerHTML = subtrair;
}


function mult()
{
valor01 = document.getElementById('valor01').value;
valor02 = document.getElementById('valor02').value;

valor01 = parseInt(valor01)
valor02 = parseInt(valor02)

multiplicar = valor01 * valor02;

document.getElementById('ValorResultado').innerHTML = multiplicar;
}


function div()
{
valor01 = document.getElementById('valor01').value;
valor02 = document.getElementById('valor02').value;

valor01 = parseInt(valor01)
valor02 = parseInt(valor02)

dividir = valor01 / valor02;

document.getElementById('ValorResultado').innerHTML = dividir;
}