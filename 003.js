function max(num) {
    let maxVal = Math.max.apply(null, num)
    return maxVal
}

function min(num) {
    let minVal = Math.min.apply(null, num)
    return minVal
}

function average(num) {
    let total = 0
    if(num.length < 1) {
        return "argumen salah"
    }

    num.forEach(number => {
        total += number
    })

    total = total / (num.length + 1)

    return total
}

let deretAngka = [1, 2, 3, 4, 5, 6, 7, 8, 2]
console.log(max(deretAngka))
console.log(min(deretAngka))
console.log(average(deretAngka))