const { reverse, } = require('../utils/tools')
describe('reverse function test', ()=> {
    test('reverse of a ', ()=>{
        const result = reverse('a')
        expect(result).toBe('a')
    })
    
    test('reverse of jest', ()=> {
        const result = reverse('jest')
        expect(result).toBe('tsej')
    })
})


