//every()

const usuarios = [
    {id: 12, Nome: 'Alberto', Idade: 9},
    {id: 55, Nome: 'Bruna', Idade: 33},
    {id: 102, Nome: 'Carlos', Idade: 17},
    {id: 44, Nome: 'Larissa', Idade: 18},
    {id: 32, Nome: 'Yan', Idade: 22}
];

//Verificar se todos são maior de idade

const maiorIdade = usuarios.every(user => user.Idade >=18);
console.log(maiorIdade);