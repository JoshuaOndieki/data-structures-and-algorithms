import exp from 'constants'
import spiral from '../src/spiral'

describe('Test Archmedian Spiral Array', ()=> {
    it('should return an array', ()=> {
        const received = spiral(3)
        expect(Array.isArray(received)).toBe(true)
    })
    it('should return 3 sub arrays given 3 as argument', ()=> {
        const received = spiral(3)
        expect(received.length).toEqual(3)
    })
    it('should return [8,9,4] in the second sub array, given 3 as argument', ()=> {
        const received = spiral(3)
        expect(received[1]).toEqual([8,9,4])
    })
})