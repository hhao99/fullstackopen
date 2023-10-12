const {  average } = require('../utils/tools')

describe('average function', ()=> {
    test('average of [1,2,3]', ()=> {
        const result = average([1,2,3])
        expect(result).toBe(2)
    } )
    
    test('average of [] should be 0', ()=> {
        const result = average([])
        expect(result).toBe(0)
    })
})
