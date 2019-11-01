"use strict";
// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.
//
var dogs = [
    {
        name: "Rex",
        breed: "Poodle",
        age: 8
    },
    {
        name: "Fredrick",
        breed: "Golden Retriever",
        age: 4
    },
    {
        name: "Mr. Beefy",
        breed: "Mastiff",
        age: 2
    }
];
console.log(dogs);

function getOlder(arr,index){
    dogs.forEach(function (dog,index) {
        dogs[index].age += 1;
    })
}

// Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.
//

    var cars = [
        {
            make: 'Volvo',
            color: 'red',
            year: 1996,
            isDirty: true
        },
        {
            make: 'Toyota',
            color: 'black',
            year: 2004,
            isDirty: false
        },
        {
            make: 'Ford',
            color: 'white',
            year: 2007,
            isDirty: true
        }
    ]
// Example output
//
//     [
//     {
//         make: 'Volvo',
//         color: 'red',
//         year: 1996,
//         isDirty: false // changed to false
//     },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false // stays the same
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: false // changed to false
//         }
//     ]


function changeToFalse (carArray) {
    carArray.forEach (function (car) {
        car.isDirty = false
    });
    return carArray;
}

console.log(changeToFalse(cars));
// ___________________________________
//
// https://www.rithmschool.com/courses/javascript/javascript-arrays-exercise
//
//     1.Using a loop, iterate through this array and console.log all of the people.
// 2.Write the command to remove "Greg" from the array.
// 3.Write the command to remove "James" from the array.
// 4.Write the command to add "Matt" to the front of the array.
// 5.Write the command to add your name to the end of the array.
// 6.Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.
//
//     ____________________________________

// ==== COMPLETED BY MIGUEL ====

var people = ["Greg", "Mary", "Devon", "James"];

people.forEach(function(person) {
    console.log(person);
});
// Remove the first item in the array
people.shift();
console.log(people);
// Remove the last item in the array
people.pop();
console.log(people);
// Add an item to the beginning of the array
people.unshift("Matt");
console.log(people);
// Add an item to the end of the array
people.push("Miguel");
console.log(people);
for (var i = 0; i < people.length; i++) {
    if (people[i] === "Mary") {
        console.log(people[i]);
        break;
    }
    console.log(people[i]);
}

// ======================
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

var breads  = [
    "white",
    "wheat",
    "rhy",
    "white"
];

var fillings = [
    "pb&j",
    "ham",
    "cheese steak",
    "tuna"
];

function makeSandwichObject(breads, fillings) {
    var arr = [];
    for (var i = 0; i < breads.length; i++) {
        var obj = {};
        obj.bread = breads[i];
        arr.push(obj);
    }
    fillings.forEach(function (b, index) {
        arr[index].filling = b, index;
    });
    return arr;
}
console.log(makeSandwichObject(breads,fillings));

//=========================

// Write a function named getRandomQuote().

var quotes = ["who knows best?, me!", "if it don't make dollars, it don't make sense", "who loves orange soda?, kel loves orange soda"];
function getRandomQuote(arr){
    return quotes.splice(Math.floor(Math.random() * quotes.length), 1);
}

console.log(getRandomQuote(quotes));
