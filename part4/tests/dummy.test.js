const { dummy } = require('../utils/list.helper')

describe("dummy test", ()=>{
    test('dummy must always return 1', ()=> {
        const result = dummy([])
        expect(result).toBe(1)
    })
})