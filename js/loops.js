// Create a function that returns the number of hashes and pluses in a string.
// Examples:
// hashPlusCount("###+") ➞ [3, 1]
//
// hashPlusCount("##+++#") ➞ [3, 3]
//
// hashPlusCount("#+++#+#++#") ➞ [4, 6]
//
// hashPlusCount("") ➞ [0, 0]
// source https://edabit.com/challenge/ydBcGvv3n447nbxCy

// ----------------Chris---------------------------

// Write a JavaScript program to construct the following pattern, using a nested for loop.
//
// *
// * *
// * * *
// * * * *
// * * * * *
// source https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php

function starPattern(){
    for(var i=1; i<=5; i++){
        console.log("*".repeat(i));
    }
}


// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
// Examples:
// makeTitle("This is a title") ➞ "This Is A Title"
//
// makeTitle("capitalize every word") ➞ "Capitalize Every Word"
//
// makeTitle("I Like Pizza") ➞ "I Like Pizza"
//
// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
// source https://edabit.com/challenge/LvtsCQNpx7CwHGubf


function firstCapital (str) {
var words = str.split(" ");
for (var i = 0; i < words.length; i++) {
    var index = words[i];
    index = index.split('');
    index[0] = index[0].toUpperCase();
    words[i] = index.join('');
}
return words.join(' ');
}

console.log(firstCapital("andrew swint"))

