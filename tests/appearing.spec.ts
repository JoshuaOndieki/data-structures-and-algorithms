import mostAppearing from '../src/appearing'

describe('Test Most Appearing Function', () => {
    let str:string
    let num:number
    let array: (string | number)[]

    beforeAll(()=>{
        str = '122334445355'
        num = 452897342262
        array = ['Joshua', 'John', 'Doe', 1, 'Joshua', 'Jane', 9, 2, 'Joshua', 'Joshua']
    })

    it('should return a string', () => {
        const word = 'hello'
        const value = mostAppearing(word)
        expect(typeof value).toBe('string')
    })
    it('should accept strings', ()=>{
        expect(()=>{mostAppearing('a string')}).not.toThrow()
    })
    it('should accept arrays', ()=>{
        expect(()=>{mostAppearing([])}).not.toThrow()
        expect(()=>{mostAppearing([1,1,3])}).not.toThrow()
    })
    it('should accept numbers', ()=>{
        expect(()=>{mostAppearing(123)}).not.toThrow()
    })
    it("should return 3,4,5 as the most appearing given a string '122334445355'", ()=>{
        const received = mostAppearing(str)
        expect(received).toBe('3,4,5 appears the most by 3 times')
    })
    it('should return 2 as the most appearing given a number 45897342262', ()=>{
        const received = mostAppearing(num)
        expect(received).toBe('2 appears the most by 4 times')
    })
    it("should return Joshua as the most appearing given an array ['Joshua', 'John', 'Doe', 1, 'Joshua', 'Jane', 9, 2, 'Joshua', 'Joshua']",
    ()=>{
        const received = mostAppearing(array)
        expect(received).toBe('Joshua appears the most by 4 times')
    })
})
