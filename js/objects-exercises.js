"use strict";
//
// Write a function, filterNumbers() that takes in an array of mixed data types and returns an array of only the numbers type in ascencding order.
//
//     Example input: ["fred", true, 5, 3] Example output: [3, 5]
//
// Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.
//
// Example input:
//
//     [
//         {
//             name: "Chompers",
//             breed: "Pug",
//             age: 7
//         },
//         {
//             name: "Freddy",
//             breed: "Lab",
//             age: 4
//         },
//         {
//             name: "Mr. Pig",
//             breed: "Mastif",
//             age: 10
//         }
//     ]
// Example output
//
//     [
//     {
//         name: "Chompers",
//         breed: "Pug",
//         age: 8
//     },
//         {
//             name: "Freddy",
//             breed: "Lab",
//             age: 5
//         },
//         {
//             name: "Mr. Pig",
//             breed: "Mastif",
//             age: 11
//         }
//     ]
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
// Write a function, adminList() that takes in an array of user objects and returns a count of all admins based on the isAdmin property. Refactor to return an array of admin-only user emails. Refactor again to return an array of user objects that are admins.
//
//     Example Input:
//
//     [
//         {
//             isAdmin: true,
//             email: 'user1@email.com'
//         },
//         {
//             isAdmin: true,
//             email: 'user2@email.com'
//         }
//         {
//             isAdmin: false,
//             email: 'user3@email.com'
//         }
//     ]
// Example Output (before refactor): 2
//
// Example Output (after 1st refactor):
//
// [
//     'user1@email.com',
//     'user2@email.com'
// ]
// Example Output (after 2nd refactor):
//
// [
//     {
//         isAdmin: true,
//         email: 'user1@email.com'
//     },
//     {
//         isAdmin: true,
//         email: 'user2@email.com'
//     }
// ]
// Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.
//
//     Example Input:
//
//     var breads  = [
//         "white",
//         "wheat",
//         "rhy",
//         "white"
//     ];
//
// var fillings = [
//     "pb&j",
//     "ham",
//     "cheese steak",
//     "tuna"
// ];
//
// makeSandwhichObjects(breads, fillings)
// Example Output:
//
//     [
//         {
//             bread: "white,
//             filling: "pb&j"
//         },
//         {
//             bread: "wheat",
//             filling: "ham"
//         },
//         {
//             bread: "rhy",
//             filling: "cheese steak"
//         },
//         {
//             bread: "white",
//             filling: "tuna"
//         }
//     ]
//
//
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
// 7.Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".
// 8.Write the command that gives the indexOf where "Mary" is located.
// 9.Write the command that gives the indexOf where "Foo" is located (this should return -1).
// 10.Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].
// 11.Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".
//
//
//     ____________________________________
//
//
// Objects
//
//
// /*
//  * Title: JS Objects Practice
//  * Author: Ryan Orsinger
//  * Topics: JS Objects, arrays, writing methods, iteration
//  */
//
// 1.Create a dog object
//
// The dog object should have properties for:
//
// breed (string),
//     weightInPounds (number),
//     age (number),
//     color (string),
//     sterilized (boolean),
//     shotRecords (array of objects with properties for date and typeOfShot)
// The dog object should have methods to:
//
//     bark() - will console.log "Woof!"
// getOlder() - will increase age by 1
// fix() - will set sterile to true if dog sterilized property is false
// vaccinate() - takes in an argument for the name of the shot and adds a new shot with the current date to the shotRecords array
