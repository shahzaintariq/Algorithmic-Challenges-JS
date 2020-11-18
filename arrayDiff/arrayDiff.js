/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    let array = Array.from(a);

    for(let i=0; i<b.length; i++){    
        if(array.includes(b[i])){        
            array = array.filter((n) => {return n != b[i]});
        }
    }

    return array
}


// console.log(arrayDiff([1,2,2,2,2,2,2,3],[2]))
// console.log(arrayDiff([-14,-6,-17,-2,15,-10,20,6,-19,-19,13,19,20],[13,19,-19,-14]))
// console.log(arrayDiff([4,-14,5,-18,-18,-1],[-18,-1,5,-14,-18,4]))
//Expected: [-6, -17, -2, 15, -10, 20, 6, 20],

console.log(arrayDiff([-20,-2,-2,16,9,-14,3,-8,-20,3,6],[3,9,16,-20,3,-2,-20]))
//Expected: [-14, -8, 6],

// console.log(arrayDiff([5,16,3,-15,-8,-9,-4,3,15,-11,-17,-16,-11,1,18,-1,14],[-16,5,-11,-8,-9,16,-15,-4,15,18,14,1,3,-1]))
//Expected: [-17],

// console.log(arrayDiff([-1,3,-2,17,20,-11,19,-9,10,10,-13,-11,-18,-20,1],[10,-13,-1,-9]))
//Expected: [3, -2, 17, 20, -11, 19, -11, -18, -20, 1],