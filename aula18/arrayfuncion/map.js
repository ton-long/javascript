//map()

const numeros = [ 1, 4, 7, 9, 35, 87 ];

const dobrarNumeros =  numeros.map(function (e){
    return e*2;
});
console.log(dobrarNumeros);

//Outra maneira de escrever

const doubleNumbers = numeros.map(e => e*2);
console.log(doubleNumbers);

//Exemplo passando de fahrenheit para celsius

const fahrenheit = [0, 15, 30, 45, 50, 100];

const celsius = fahrenheit.map(temp => Math.round( (temp - 32)* 5/9 ) );
console.log(celsius);