// Step 1: Ask user for number, utilize parseInt to turn it into a number
let numOne = parseInt(prompt('Enter a number' ))
let numTwo = parseInt(prompt('Enter a number' ))

// Step 2: evaluate the larger number
if ( numOne > numTwo ) {
    document.write(`this is the greater value ${numOne}`)
} else if (numTwo > numOne) {
    document.write(`This is the greater value ${numTwo}`)
} else  {
    document.write( 'Both number you have entered are equal')
}