function mostAppearing(value: string | number | (string | number)[]) {
    // works for string, number, and array value
    // returns all most appearing values if a tie
    // e.g. 122334445355 returns 3,4,5
    let mostValues: (string | number)[] = []
    let totalCount:number = 0

    let array: (string | number)[] = [] // [1,2,3,4,4] ['s','a2','se']

    if (!Array.isArray(value)) {        
        array = typeof value === 'number' ? value.toString().toLowerCase().split('') : array
        array = typeof value === 'string' ? value.toLowerCase().split('') : array
    } else {
        array = value
    }

    if (array.length && typeof array === 'object') {        
        array.forEach((item:string | number) => {
            const count = array.filter((val:string | number)=>{
                return val.toString().toLowerCase() === item.toString().toLowerCase() 
            }).length
    
            if (count === totalCount) {                
                mostValues.push(item)
            }
            else if(count > totalCount){
                // most = [[item], count]
                mostValues = [item]
                totalCount = count
            }
    })
        
    }    

    return `${mostValues.filter((item, index) => mostValues.indexOf(item) === index)} appears the most by ${totalCount} times`
}

// console.log(mostAppearing(122334445355));


export default mostAppearing