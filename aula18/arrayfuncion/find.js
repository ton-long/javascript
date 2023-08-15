//find()

const pizzas = ['mussarela', 'portuguesa', 'calabresa', 'marguerita']

const acharPizzas = pizzas.find(p => p.startsWith('m') );
console.log(acharPizzas);

const frutas = [
    {nome: 'maçã', unidades: 2},
    {nome: 'banana', unidades: 0},
    {nome: 'laranja', unidades: 5}
];

const encontrarFrutas = frutas.find(fruta => fruta.nome === 'laranja');
console.log(encontrarFrutas);