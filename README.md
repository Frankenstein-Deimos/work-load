#POD ASSESSMENT 1

##GROUP NAME: FRANKESTEIN

Below is a designated list separated by each individual. Below each numbered exercise is the name of the individual who completed the exercise.

##BOM & DOM

### 1. Memory Card Game

----
Exercise done by: Chris

----

"Concentration, also known as Memory, Pelmanism, Shinkei-suijaku, Pexeso or Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn."

http://en.wikipedia.org/wiki/Concentration_(game)

The objective of the game is to turn over pairs of matching cards until all cards are matched.

YOUR GAME SHOULD:
- Display a set of cards, all face down initially.
- Allow the user to click on one card, and then another. When each card is clicked it should flip over and show its image or value.
- Compare those two cards to one another and see if they match. If they match, keep the cards face up. Otherwise, flip the cards back over.
- Keep track of how long each round lasts, and upon successful completion of the game, allow the user to input their name for "High Score" tracking.
- The game should display the high score page each time a round is completed. These scores should persist across sessions, but could have an option to reset all scores.

ADDITIONAL FEATURES:
- Allow the user to specify how many cards for the round (an even number).
- Allow the user to choose a time limit for each round.
- Allow multiple users, switching between users for each turn/attempt.
- Keep score, incrementing that score by a particular amount when a matching pair is found - and decrementing score when a failed attempt is made. Include that score when the round is completed, allowing it to be placed on the high score page.
- Add sound effects on card click, successful match, round won and round lost. Special effect for new high score, including graphics, would be pretty sweet.

Source: https://java.codeup.com/appendix/extra-challenges/memory-game/

### 2. Whack-A-Mole Game

----
Exercise done by: Miguel

----

http://en.wikipedia.org/wiki/Whac-A-Mole is a popular game created in the 1970s. The game randomly has plastic (or wooden) moles pop out of holes, and the object of the game is to hit the moles and have them go back in their hole.

BUILDING WHACK-A-MOLE

We will be building an online version of the Whack-A-Mole game using HTML, CSS, and jQuery.

Video Source: https://www.youtube.com/watch?v=IlQs7uzULs0

To build this game, follow these steps:
- Setup a new project locally and link it to your github.
- Create your HTML markup and CSS to position your holes. These will be element that your mole will pop in and out of.
- Randomly select a hole on page load and change its background color to red. You may want to nest another element, and use an animated method like .fadeIn().
- Change the red background to use an image. This could be a mole, or any other image you'd like to use.
- Update the code to remove the mole when it is clicked.
- Add score. Each time the mole is successfully clicked, increase the displayed score by 1.

BONUS
- Add a start button. Don't start the game until the button is pressed.
- Add a timer. Only allow clicks during the period. If the timer is 30 seconds, the game should quit recording clicks after 30 seconds, and should activate the start button. Clicking the start button should reset the game.
- Keep the high score for the round. This does not need to persist between page loads, although it could if you wanted it to.
- Make the moles appear more often after each click.

Source: https://java.codeup.com/jquery/whack-a-mole/create-game/

###3. Change Text Style - external source

----
Exercise done by: Andrew

----

Modify the style of the paragraph text through javascript code.

Source: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

##LOOPS

###1. Create a function that returns the number of hashes and pluses in a string.

----
Exercise done by: Miguel

----

Examples:

hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]

Source: https://edabit.com/challenge/ydBcGvv3n447nbxCy

###2. Write a JavaScript program to construct the following pattern, using a nested for loop.

----
Exercise done by: Chris

----

\*

\* *

\* * *

\* * * *

\* * * * *

Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php


###3. Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

----
Exercise done by: Andrew

----

Examples:
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
source https://edabit.com/challenge/LvtsCQNpx7CwHGubf

##Objects

###1.Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.

----
Exercise done by: Andrew

----

Example input:

[
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

Example output

[
  {
    make: 'Volvo',
    color: 'red',
    year: 1996,
    isDirty: false // changed to false
  },
  
  {
    make: 'Toyota',
    color: 'black',
    year: 2004,
    isDirty: false // stays the same
  },
  
  {
    make: 'Ford',
    color: 'white',
    year: 2007,
    isDirty: false // changed to false
  }
]

###2. External source exercise 

----
Exercise done by: Miguel

----

var people = ["Greg", "Mary", "Devon", "James"];


1.Using a loop, iterate through this array and console.log all of the people.

2.Write the command to remove "Greg" from the array.

3.Write the command to remove "James" from the array.

4.Write the command to add "Matt" to the front of the array.

5.Write the command to add your name to the end of the array.

6.Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

Source: https://www.rithmschool.com/courses/javascript/javascript-arrays-exercise

###3.Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.

----
Exercise done by: Chris

----

Example input:

[
  {
    name: "Chompers",
    breed: "Pug",
    age: 7
  },
  
  {
    name: "Freddy",
    breed: "Lab",
    age: 4
  },
  
  {
    name: "Mr. Pig",
    breed: "Mastif",
    age: 10
  }
]

Example output

[
  {
    name: "Chompers",
    breed: "Pug",
    age: 8
  },
  
  {
    name: "Freddy",
    breed: "Lab",
    age: 5
  },
  
  {
    name: "Mr. Pig",
    breed: "Mastiff",
    age: 11
  }
]

#POD ASSESSMENT 2

##Miguel's Provided Exercises

### 1. Key Pressed Counter

----
Exercise in progress by: 

----

Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.

Source: https://java.codeup.com/extra-exercises/javascript/dom-events/

### 2. A Pile of Sandwiches

----
Exercise in progress by: 

----

Create a function, makeSandwhichObjects() that takes in two array of strings, breads and fillings and returns an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

Source: https://java.codeup.com/extra-exercises/javascript/arrays-and-objects/

### 3. Simple Calculator

----
Exercise in progress by: Miguel

----

Create a simple calculator using javascript

Source: https://java.codeup.com/javascript-i/bom-and-dom/calculator/