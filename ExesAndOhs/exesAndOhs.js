/*
Description:
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

function XO(str){
    let letter = str.toLowerCase().split('');
    let counterForX = 0;
    let counterForO = 0;

    for(let i=0; i<letter.length; i++){
        if(letter[i] === 'o'){
            counterForO++;
        }else if(letter[i] === 'x'){
            counterForX++
        }

    }
    return counterForO === counterForX ? true : false
}

// console.log(XO("ooxx"))
// console.log(XO("xooxx"))
// console.log(XO("ooxXm"))
// console.log(XO("zpzpzpppp"))
// console.log(XO('zzoo'))