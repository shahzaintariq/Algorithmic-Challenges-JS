/**
You are standing on top of an amazing Himalayan mountain. The view is absolutely breathtaking!
you want to take a picture on your phone, but... your memory is full again! ok, time to sort through
your shuffled photos and make some space...

Given a gallery of photos, write a function to sort through your pictures. You get a random hard disk
drive full of pics, you must return an array with the 5 most recent ones PLUS the next one 
(same year and number following the one of the last).

You will always get at least a photo and all pics will be in the format YYYY.imgN

Examples:

sortPhotos["2016.img1","2016.img2","2015.img3","2016.img4","2013.img5"]) ==["2013.img5","2015.img3","2016.img1","2016.img2","2016.img4","2016.img5"]
sortPhotos["2016.img1"]) ==["2016.img1","2016.img2"]
*/

// function sortPhotos(pics){
//     let sortArry = pics.sort();
//     let result = []
//     let lastElem = sortArry[sortArry.length - 1];
//     let lastindex = lastElem[lastElem.length -1];
//     lastElem = lastElem.slice(0,lastElem.length-1);
//     lastindex++
//     lastElem = lastElem+lastindex;
//     sortArry = sortArry.reverse()
//     for(let i=0; i < 5; i++){
//         result.unshift(sortArry[i])
//     }
//     result.push(lastElem);
//     return result;

// };


function sortPhotos(arr){
    let newArr = arr.sort().reverse();
    newArr =  newArr.slice(0,5);
    newArr = newArr.reverse()
    let numArr = [];
    newArr.filter((v,i) => {
        newArr[i] = v.slice(0,8);
        numArr.push(v.slice(8))
    })
    numArr = numArr.sort(function(a, b){return a-b});
    numArr[numArr.length] = (Number(numArr[numArr.length-1]) + 1).toString()
    newArr.push(newArr[newArr.length - 1]);

    newArr.filter((v,i)=>{
        newArr[i] = v+numArr[i]
    })

    console.log(newArr);
}

sortPhotos(["2014.img12", "2008.img12", "2015.img16", "2010.img7", "2015.img1", "2016.img18", "2011.img14", "2012.img17"])
// Expected: '[\'2012.img17\', \'2014.img12\', \'2015.img1\', \'2015.img16\', \'2016.img18\', \'2016.img19\']'
// // makeArray(["2009.img14", "2014.img20", "2010.img4", "2014.img2", "2013.img20", "2016.img13", "2016.img5", "2012.img8", "2009.img19", "2013.img10","2012.img4", "2016.img15", "2014.img9", "2014.img17", "2008.img1", "2013.img16", "2015.img11", "2011.img8", "2010.img19", "2014.img1", "2016.img4", "2016.img12"])
// sortPhotos(["2009.img14", "2014.img20", "2010.img4", "2014.img2", "2013.img20", "2016.img13", "2016.img5", "2012.img8", "2009.img19", "2013.img10","2012.img4", 
            // "2016.img15", "2014.img9", "2014.img17", "2008.img1", "2013.img16", "2015.img11", "2011.img8", "2010.img19", "2014.img1", "2016.img4", "2016.img12"])
// EXPECTED: '[\'2016.img4\', \'2016.img5\', \'2016.img12\', \'2016.img13\', \'2016.img15\', \'2016.img16\']'
