function removeDuplicate(data) {
    let newArr = []

    for(let value of data) {
        if(newArr.indexOf(value) === -1) {
            newArr.push(value)
        }
    }

    return newArr
}

let data = [
    "Jakarta", "Aceh", "Malang", "Medan", "Bontang", "Jogja", "Jakarta", "Bandung", "Malang", "Solo", "Palembang", "Bandung"
]
console.log(removeDuplicate(data))