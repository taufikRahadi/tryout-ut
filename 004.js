function palindrome(str) {
    let Str = str.split("") //str value to array
    let revStr = Str.reverse() //reverse Str array
    let clean = [] //asign empty array
    //loop revStr
    revStr.forEach(rev => {
        //check if rev value is not whitespace and is alphabet
        if(rev != ' ' && rev.match(/[a-zA-Z]/)) {
            //then push rev value to clean array
            clean.push(rev)
        }
    })
    //reverse and join clean value
    clean = clean.reverse().join("").toLowerCase()
    let newStr = () => {
        let arr = []
        Str.forEach(string => {
            if(string != ' ' && string.match(/[a-zA-Z]/)) {
                arr.push(string)
            }
        })

        return arr.join("").toLowerCase()
    }

    return clean === newStr()
}

console.log(palindrome("Cigar? Toss it in a can. It is so tragic")) // output true
console.log(palindrome("I did, did I?")) // output true
console.log(palindrome("Red rum, sir, is murder")) // output true
console.log(palindrome("Eva, can I see bees in a cave?")) // output true
console.log(palindrome("Hello World")) // output false
