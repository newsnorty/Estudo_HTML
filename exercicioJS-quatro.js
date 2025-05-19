

//Declaracao do array 'numeros' sem tamanho definido e sem elementos atribuidos
var numeros = [];

//O primeiro elemento (o de indice 0) recebe o retorno da funcao que solicita o primeiro numero
numeros[0] = solicitaPrimeiroNumero();

//O segundo elemento (o de indice 1) recebe o retorno da funcao que solicita o segundo numero
numeros[1] = solicitaSegundoNumero();

//Declaração de atribuição de valor à variável que armazenará o resultado da divisão
//O resultado da divisão virá da função 'divida' (essa função recebe como parâmetro o array 'numeros')
var resultadoDivisao = divida(numeros);

//Exibindo o resultado da divisão na tela
alert('O resultado da divisao eh igual a: ' + resultadoDivisao);

/*
Função Javascript
Esta função não recebe parâmetros
*/
function solicitaPrimeiroNumero(){
    //Declaração e atribuição de variável. Ela receberá o número inserido pelo usuário
    var numero1 = prompt("Insira o primeiro numero: ");
    //Condição para verificar se o número é positivo.
    //Caso não, o retorno da função será chamar a própria função novamente.
    //Esta operação será repetida até que um número válido seja inserido.
    //Caso sim, retorna o valor inserido pelo usuário
    if(numero1 < 0){
        alert('Numero invalido, insira um numero inteiro positivo.');
        return solicitaPrimeiroNumero();
    } else{
        return numero1;
    }
}

function solicitaSegundoNumero(){
    var numero2 = prompt("Insira o segundo numero: ");
    if(numero2 < 0){
        alert('Numero invalido, insira um numero inteiro positivo.')
        return solicitaSegundoNumero();
    } else{
        return numero2;
    }
}
/*
Esta função recebe como parâmetro um array - que contém os 2 números que desejamos dividir
*/
function divida(numeros){
    var resultado = 0;
     //Os números a serem divididos são acessados através dos índices do array
    resultado = numeros[0] / numeros[1];
    return resultado;
}
