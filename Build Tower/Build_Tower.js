/*
Build Tower
Build Tower by the following given argument:
number of floors (integer and always greater than 0).

Tower block is represented as *

JavaScript: returns an Array;

Have fun!

for example, a tower of 3 floors looks like below

[
  '  *  ', 
  ' *** ', 
  '*****'
]
and a tower of 6 floors looks like below

[
  '     *     ', 
  '    ***    ', 
  '   *****   ', 
  '  *******  ', 
  ' ********* ', 
  '***********'
]
*/

function towerBuilder(nFloors) {
  let width = nFloors*2 - 1;
  let tower = [];
  for (var i = 0; i < nFloors; i++){
    tower[i] = buildFloor(width, (i+1)*2 - 1);
  }
  return tower;
}

function buildFloor(width, numStars){
  let spaces = (width - numStars) / 2;
  let floor = '';
  for (var j = 0; j < numStars; j++){
    floor += '*';
  }
  for (var i = 0; i < spaces; i++){
    floor = ' ' + floor + ' ';
  }
  return floor;
}





