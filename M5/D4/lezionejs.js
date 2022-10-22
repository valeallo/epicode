const myArray = ["io", "sono", "veramente", "tanto", "nera", "e", "non", "so", "cosa", "fare"]


const searchWord = (string) => {
    const stringIndex = myArray.indexOf(string);
    return console.log(`la parola "${string}"
    
    
    è all'indice 
    
    
    ${stringIndex}`);
    //template literal
}

searchWord("non");


//const myName = "Valentina"

const reverseString = (string) => {
    const reversedString = string
    .split("")
    .reverse()
    .join("")

    return reversedString;
}

//console.log(reverseString(myName))

const num = "42145"

const descendingNumbers = (num) => { 
    const numArray = num.split("")
    .sort()
    .reverse()
    .join("")
    const number = parseInt(numArray)
    return number

}

console.log(descendingNumbers(num))
//redux è una cosa fondamentale da studiare
//SI


const descendingNumberTwo = () => {
return Number(number.toString.split("").sort((a,b) => b-a).join(""))

}