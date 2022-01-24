const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo

const toObject = (array) => {
    [modelo, marca, ano] = array 
    return console.log({
        modelo,
        marca,
        ano,
    })};

toObject(palio);
toObject(shelbyCobra);
toObject(chiron);