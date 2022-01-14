const myRemove = require('./myremove');

describe ('Testes do myRemove()', () => {
    it ('Retorna o array esperado?', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    it ('Nao retorna o array esperado?', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
    it ('Retornar array mesmo sem o item nele', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2,3, 4])
    })
})