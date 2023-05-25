function capitalizeWords(str:string) {
    // takes in a word or sentence and capilizes the first letter of each word.
    // e.g. hello world > Hello World
    const words = str.trim().split(' ')
    words.forEach((word, index) => {
            words[index] = word[0].toUpperCase() + word.slice(1)
    });

    return words.join(' ')
}

// console.log(capitalizeWords(' hello world a '));


export default capitalizeWords