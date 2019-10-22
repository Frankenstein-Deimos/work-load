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
//     Example input:
//
//     [
//         {
//             make: 'Volvo',
//             color: 'red',
//             year: 1996,
//             isDirty: true
//         },
//         {
//             make: 'Toyota',
//             color: 'black',
//             year: 2004,
//             isDirty: false
//         },
//         {
//             make: 'Ford',
//             color: 'white',
//             year: 2007,
//             isDirty: true
//         }
//     ]
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

