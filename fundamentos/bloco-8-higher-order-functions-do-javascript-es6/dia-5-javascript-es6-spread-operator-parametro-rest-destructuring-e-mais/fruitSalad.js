// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Melância', 'Morango', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Mamão', 'Uva', 'Melão'];

const fruitSalad = (fruit, additional) => {
  const saladFruit = [...fruit, ...additional];
  return saladFruit;
};

console.log(fruitSalad(specialFruit, additionalItens));