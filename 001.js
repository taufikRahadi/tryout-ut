function grade(num) {
    let output = ''
    if(num < 59) {
        output = 'E'
    } else if(num >= 60 && num < 70) {
        output = 'D'
    } else if(num >= 70 && num < 80) {
        output = 'C'
    } else if(num > 79 && num < 90) {
        output = 'B'
    } else {
        output = 'A'
    }
    // if(num >= 90) {
    //     output = 'A'
    // } else if(num <= 89) {
    //     output = 'B'
    // } else if(num < 80) {
    //     output = 'C'
    // } else if(num < 70) {
    //     output = 'D'
    // } else {
    //     output = 'E'
    // }

    return output
}

console.log(grade(10))
console.log(grade(80))
console.log(grade(90))
