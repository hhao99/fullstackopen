const { totalLikes } = require('../utils/list.helper')

describe('totalLikes test', ()=> {
    test('[] alwasy return 0',()=> {
        const blogs = []
        const result = totalLikes(blogs)
        expect(result).toBe(0)
    })
    test('blogs likes ', ()=> {
        const blogs = [
            { 
                title: '1st blog',
                likes: 2
            },
            {
                title: '2nd blog',
                likes: 5
            }
        ]
        const result = totalLikes(blogs)
        expect(result).toEqual(7)
    })
})

