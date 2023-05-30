const fibonacci:any = (n:number, fibonacciNumbers=[0,1], nextNumber=0) => {
    nextNumber ? fibonacciNumbers.push(nextNumber) : ''

    let lastTwo = fibonacciNumbers.slice(-2)

    return fibonacciNumbers.length < n ? fibonacci(n, fibonacciNumbers, lastTwo[0] + lastTwo[1]) : fibonacciNumbers
}

export default fibonacci