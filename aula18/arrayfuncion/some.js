//some()

const team = [
    {id: 12, name: 'Topper Harley', pilot: false},
    {id: 44, name: 'Ramada', pilot: true},
    {id: 59, name: 'Pete', pilot: false}
];

//Verificar se há algum jogador piloto no time:

console.log(team.some(player => player.pilot) );