import capitalizeWords from '../src/capitalize'

describe('Test Capitalize Words Function', () => {
    let word:string
    let sentence:string

    beforeAll(()=>{
        word = 'hello'
        sentence = 'hello world'
    })

    it('should return a string', () => {
        const value = capitalizeWords(word)
        expect(typeof value).toBe('string')
    })
    it('should return Hello given hello', () => {
        const value = capitalizeWords(word)
        expect(value).toBe('Hello')
    })
    it('should return Hello World given hello world', () => {
        const value = capitalizeWords(sentence)
        expect(value).toBe('Hello World')
    })
    it('should return ignore whitespace', () => {
        const whitespacedSentence = sentence + ' '
        const value = capitalizeWords(whitespacedSentence)
        expect(value).toBe('Hello World')
    })
})
