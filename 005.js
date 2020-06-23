function leapYear(startYear, endYear) {
    let output = ''

    for(let i = startYear; i <= endYear; i++) {
        if((i % 4) == 0) {
            output += `${i} adalah tahun kabisat \n`
        } else {
            output += `${i} bukan tahun kabisat \n`
        }
    }

    return output
}

console.log(leapYear(1600, 2020))