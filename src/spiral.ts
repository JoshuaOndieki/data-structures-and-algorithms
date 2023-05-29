
const spiral = (n:number)=> {
    // takes a number n
    // returns an array with subarrays whose pattern is an archmedian spiral
    // e.g. n = 3
    // returns [[1,2,3], [8,9,4], [7,6,5]]
    
    let array = new Array(n)
    const limit = n*n

    type direction = null | 'front' | 'back'

    for (let index = 0; index < array.length; index++) {
        array[index] = new Array(n)
    }

    function directionSetter() {
        if (!rowDirection) { 
            col = colDirection === 'front' ? col+1 : col-1
            if ((col === colStartLimit && colDirection === 'back') || (col === colEndLimit && colDirection === 'front')) {
                colDirection = null
                rowDirection = row === rowEndLimit ? 'back' : 'front'
            }
        }

        else if (!colDirection) {     
            row = rowDirection === 'front' ? row+1 : row-1
            if ((row === rowStartLimit && rowDirection === 'back') || (row === rowEndLimit && rowDirection === 'front')) {
                rowDirection = null
                colDirection = col === colEndLimit ? 'back' : 'front'
            }
        }

    }

    // rowDirection, colDirection either front, back, or null
    let rowDirection:direction = null
    let colDirection:direction = 'front'
    // row, col between 0 and n-1
    // start with row 0, col 0
    let row = 0
    let col = 0
    // limit the spiral to uncovered rows and columns
    let rowStartLimit = 0
    let rowEndLimit = n-1
    let colStartLimit = 0
    let colEndLimit = n-1

    for (let number = 1; number <= limit; number++) {
        array[row][col] = number
        
        rowStartLimit = array[rowStartLimit].reduce(
            (accum:number, curr:number) => {
                return accum +1},0) === n
                ? rowStartLimit+1 : rowStartLimit
        
        rowEndLimit = array[rowEndLimit].reduce(
        (accum:number, curr:number) => {
            return accum +1},0) === n
            ? rowEndLimit-1 : rowEndLimit
        
        colStartLimit = array.reduce(
            (accum:number, currArr:number[]) => {
                return currArr[colStartLimit] ? accum +1 : accum},0) === n
                ? colStartLimit+1 : colStartLimit

        colEndLimit = array.reduce(
        (accum:number, currArr:number[]) => {
            return currArr[colEndLimit] ? accum +1 : accum},0) === n
            ? colEndLimit-1 : colEndLimit

        directionSetter()
    }

    return array
    
}


export default spiral