/*
    *CHALLENGE*
Return the Number(count) of vowels in s given string
we will consider a,e,i,o,u, as vowel

*/

function countVowels(str) {
  let counter = 0;
  let vowels = "aeiou";
  for (let elem of str) {
    if (vowels.includes(elem)) {
      counter++;
    }
  }
  return counter;
}

console.log(countVowels("shahzain")); // 3
