const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const convert = (array1, array2) => array1 + array2;

const flatten = arrays.reduce(convert);

console.log(flatten);
