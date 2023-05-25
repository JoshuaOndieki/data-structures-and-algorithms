import fizzBuzz from '../src/fizzBuzz'


describe('Test fizzBuzz Function', ()=>{
    let logSpy:any
    let logsFor15: (string | number)[]

    beforeAll(()=>{
        logsFor15 = [1,2,'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz']
    })

    beforeEach(()=>{
        logSpy = jest.spyOn(global.console, 'log')
    })

    afterEach(()=> {
        logSpy.mockRestore()
    })

    test('should call console.log', ()=>{
        fizzBuzz(1)
        expect(logSpy).toHaveBeenCalled()
    })
    test('should call console twice given n as 2', ()=> {
        fizzBuzz(2)
        expect(logSpy).toHaveBeenCalledTimes(2)
    })
    test('should call console with the correct values', ()=>{
        fizzBuzz(15)
        logsFor15.forEach((log, index) => {
            expect(logSpy.mock.calls[index][0]).toBe(log)
        })
    })
})