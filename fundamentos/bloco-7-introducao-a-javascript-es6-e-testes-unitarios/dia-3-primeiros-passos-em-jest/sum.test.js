const sum = require('./sum');

describe('Teste de somas', () => {

    it('sum() 4 e 5 resulta em 9', () => {
        expect(sum(4, 5)).toEqual(9)
    })
    it('sum() 0 e 0 resulta em 0', () => {
        expect(sum(0, 0)).toEqual(0)
    })
    it('erro se paremtro nao e numero', () => {
        expect(() => sum(4, '5')).toThrowError()
    })
})