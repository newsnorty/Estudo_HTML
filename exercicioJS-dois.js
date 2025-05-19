var primeiro_numero = 5;
var segundo_numero = -1;

if ((primeiro_numero > segundo_numero) && segundo_numero > 0){
    console.log("A primeira variavel eh maior do que a segunda e a segunda variavel eh um numero posistivo");
}
else if((primeiro_numero > segundo_numero) && segundo_numero < 0){
    console.log("A primeira variavel eh maior que a segunda e a segunda variavel nao eh um numero positivo");
}
else if((primeiro_numero < segundo_numero) || segundo_numero > 0){
    console.log("A primeira variavel eh menor que a segunda ou a segunda variavel eh um numero positivo")
}