/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/


function calStr(letters,counter){
    let result = '';
    if(counter === 1){
        result = letters.toUpperCase();
        result = toJadenCase(result)
        return result
    }
    for(let i=1; i<=counter; i++){
        result += letters;
    }
    result = toJadenCase(result)
    return result
}


function toJadenCase(str){
    let strArr = str.split(' ');
    let jadenCase = [];
    for(let elem of strArr){
        jadenCase.push(elem[0].toUpperCase()+ (elem.substr(1)).toLowerCase())   
    }
    return jadenCase.join(' ')
}

// console.log(calStr('a',3))

function accum(str){
    let words = str.toLowerCase().split('');
    let result = [];
    for(let i=0; i<words.length; i++){
        result.push(calStr(words[i],i+1));
    }
    result = result.join('-')
    return result
}

console.log(accum('RqaEzty')) //R Qq Aaa Eeee Zzzzz Tttttt Yyyyyyy