//Filter()

const idade = [21, 15, 32, 8, 18, 36, 7];

const maiorIdade = idade.filter(i => {
    if(i >=18){
        return i;
    };
});
console.log(maiorIdade);

const menorIdade = idade.filter(i =>{
    if(i <18){
        return i;
    };
});
console.log(menorIdade);