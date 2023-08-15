//reduce()

const alunos = [
    {Nome: 'Alberto', Idade: 15},
    {Nome: 'Bruna', Idade: 17},
    {Nome: 'Carlos', Idade: 20},
    {Nome: 'Larissa', Idade: 16},
    {Nome: 'Yan', Idade: 22}
];

const somIdades = alunos.reduce( (prev, ele) => prev + ele.Idade, 0)
console.log(somIdades)