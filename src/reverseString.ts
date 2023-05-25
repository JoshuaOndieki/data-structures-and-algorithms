const reverseString = (str:string)=>{
    // takes in a string and returns a reverse of the string.
    // e.g hello > olleh
    let stringArray = str.trim().split('')
    let reversedString = ''
    while (stringArray.length) {
        reversedString += stringArray.pop()
    }
    return reversedString
}


export default reverseString