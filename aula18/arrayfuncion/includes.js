//includes()

console.log([1, 3, 6].includes(2))

const cadastro = [
    {id: 7, nome: 'Alberto', idade: 45, profissao: 'Escritor'},
    {id: 33, nome: 'Bruna', idade: 19, profissao: 'Estudante'},
    {id: 23, nome: 'Carol', idade: 22, profissao: 'Lojista'},
    {id: 76, nome: 'Yan', idade: 26, profissao: 'Circense'},
];

const buscarCadastro = cadastro.filter( p => p.nome.includes('r') );
console.log(buscarCadastro);