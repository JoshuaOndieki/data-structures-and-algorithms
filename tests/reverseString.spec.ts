import reverseString from '../src/reverseString'

describe('Test Reverse String Function', () => {
    let word:string
    let sentence:string

    beforeAll(()=>{
        word = 'hello'
        sentence = 'hello world'
    })

    it('should return a string', () => {
        const value = reverseString(word)
        expect(typeof value).toBe('string')
    })
    it('should return olleh given hello', () => {
        const value = reverseString(word)
        expect(value).toBe('olleh')
    })
    it('should return trim string', () => {
        const whitespacedWord = word + ' '
        const value = reverseString(whitespacedWord)
        expect(value).toBe('olleh')
    })
    it('should return dlrow olleh given hello world', () => {
        const value = reverseString(sentence)
        expect(value).toBe('dlrow olleh')
    })
})
