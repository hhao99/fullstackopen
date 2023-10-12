const { dummy } = require('../utils/list.helper')

describe("dummy test", ()=>{
    test('dummy must always return 1', ()=> {
        const blogs = [];
        const result = dummy(blogs)
        expect(result).toBe(1)
    })
})