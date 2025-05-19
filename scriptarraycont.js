var frutas = ['Laranja', 'Uva', 'Pera', 'Melancia']


/*Imprimindo na caixa de dialogo o conteudo do array 'frutas' utilizando o laco 'for'*/
for(var i = 0; i< frutas.lenght; i++){
    console.log('Nome da Fruta contida no Array: ' + frutas[i]);
}

/*Imprimindo na caixa de dialogo o conteudo do array 'frutas' utilizando o laco 'for/in'*/
for(var fruta in frutas){
    console.log('Nome da Fruta contida no array: ' + frutas[fruta])
}

/*Esse segundo metodo eh melhor pois ele eh o mais apropriado para um array, uma vez que ele vai percorrer TODOS os itens de dentro do array, otimizando o que queremos escrevendo/pensando menos*/