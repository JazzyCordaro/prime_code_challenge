// 1 - Add the value 32 to the end of
// the following array.

var arr = [3, 4, 6, 0];
arr.push(32);
console.log(arr);

// 2 - Remove the values 4 & 6 from
// arr using the splice method.
var arr = [3, 4, 6, 0, 32]
arr.splice(1, 2);
console.log(arr);

// 3 - Use the sort method to order
// each array value from smallest
// to largest.
var arr = [3, 4, 6, 0, 32]
arr.sort(function(a, b){return a-b});
console.log(arr);


// 4 - Use the map method to
// halve the value of each
// value in the array. Assign the result to
// a new array called newArr. Console.log
// the new array.
var arr = [0, 3, 4, 6, 32];
var roots = arr.map(Math.sqrt);
console.log(roots);

var newArr = roots ;
console.log(newArr);
//done
