function unlimitedNumber(input) {
    let total = 0
    
    for ( let i = 0; i <= input.length; i++ ) {
        if(input[i] === '=') {
            break
        } else {
            total += input[i]
        }
    }

    return total
}

console.log(unlimitedNumber([1, 3, 2, 5, '=', 10]))