/* 
write two function that takes an array of number and return largest and smallest num;
*/

function findMax(nums){
    let largestNum = [0];
    for(let elem of nums){
        if(elem > largestNum){
            largestNum = elem;
        }
    }
    return largestNum
}


function findMin(nums){
    let SmallestNum = [0];
    for(let elem of nums){
        if(elem < SmallestNum){
            SmallestNum = elem;
        }
    }
    return SmallestNum
}

console.log(findMax([1,3,45,-78,50768,48,9084]))
console.log(findMin([1,3,45,-78,50768,48,9084]))