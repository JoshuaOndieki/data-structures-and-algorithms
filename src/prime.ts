const prime = (n:number) => {
    const smallerNumbers = [...(Array(n).keys())]
    smallerNumbers.splice(0,2)

    return !smallerNumbers.some((num) => {
        return n%num === 0
    })
}

export default prime
