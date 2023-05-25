import chunkSubArrays from '../src/arrayChunk'

describe('Test Array Chunks Function', () => {
    let array:any[]
    let array1:any[]
    let chunkSize3:number

    beforeAll(()=>{
        array = [1,2,3,4,5,6,7,8,9]
        array1 = ['wed', 232, '44e4', '3', 7]
        chunkSize3 = 3
    })

    it('should return an array', () => {
        const array:any[] = []
        const value = chunkSubArrays(array, chunkSize3)
        expect(Array.isArray(value)).toBe(true)
    })
    it('should not return sub array longer than chunkSize given', () => {
        const value = chunkSubArrays(array, chunkSize3)
        expect(value[0].length <= 3).toBe(true)
    })
    it('should not return 3 sub arrays given array with 9 items and chunkSize of 3', () => {
        const value = chunkSubArrays(array, chunkSize3)
        expect(value.length).toEqual(3)
    })
    it('should return correct items in sub arrays', ()=>{
        const value = chunkSubArrays(array1, chunkSize3)
        const expected = ['wed', 232, '44e4']        
        expect(value[0]).toEqual(expected)
    })
})
