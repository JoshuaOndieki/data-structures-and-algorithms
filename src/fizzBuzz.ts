const fizzBuzz = (n:number)=> {
    // takes a number n as the argument
    // iterates 1 up to n and for each, it logs either the number, fizz, buzz, or fizzbuzz
    // fizz > divisible by 3
    // buzz > divisible by 5
    // fizzbuzz > divisible by both 3 and 5
    let logValue:string | number

    for (let number = 1; number <= n; number++) {
        logValue = number // default

        logValue = !(number%3) ? 'fizz' : logValue
        logValue = !(number%5) ? 'buzz' : logValue
        logValue = !(number%3) && !(number%5) ? 'fizzbuzz' : logValue

        console.log(logValue)   
    }
}

export default fizzBuzz