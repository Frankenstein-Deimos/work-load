# POD ASSESSMENT 1

## GROUP NAME: FRANKESTEIN

Below is a designated list separated by each individual. Below each numbered exercise is the name of the individual who completed the exercise.

## BOM & DOM

### 1. Memory Card Game

----
Exercise: Done by Chris

----

> "Concentration, also known as Memory, Pelmanism, Shinkei-suijaku, Pexeso or Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn."

Source: http://en.wikipedia.org/wiki/Concentration_(game)

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
Exercise: Done by Miguel

----

>http://en.wikipedia.org/wiki/Whac-A-Mole is a popular game created in the 1970s. The game randomly has plastic (or wooden) moles pop out of holes, and the object of the game is to hit the moles and have them go back in their hole.

BUILDING WHACK-A-MOLE

We will be building an online version of the Whack-A-Mole game using HTML, CSS, and jQuery.

Video Source: https://www.youtube.com/watch?v=IlQs7uzULs0

To build this game, follow these steps:
1. Setup a new project locally and link it to your github.
2. Create your HTML markup and CSS to position your holes. These will be element that your mole will pop in and out of.
3. Randomly select a hole on page load and change its background color to red. You may want to nest another element, and use an animated method like .fadeIn().
4. Change the red background to use an image. This could be a mole, or any other image you'd like to use.
5. Update the code to remove the mole when it is clicked.
6. Add score. Each time the mole is successfully clicked, increase the displayed score by 1.

BONUS
- Add a start button. Don't start the game until the button is pressed.
- Add a timer. Only allow clicks during the period. If the timer is 30 seconds, the game should quit recording clicks after 30 seconds, and should activate the start button. Clicking the start button should reset the game.
- Keep the high score for the round. This does not need to persist between page loads, although it could if you wanted it to.
- Make the moles appear more often after each click.

Source: https://java.codeup.com/jquery/whack-a-mole/create-game/

### 3. Change Text Style - external source

----
Exercise: Done by Andrew

----

Modify the style of the paragraph text through javascript code.

Source: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

## LOOPS

### 1. Create a function that returns the number of hashes and pluses in a string.

----
Exercise: Done by Miguel

----

#### Examples:

```
hashPlusCount("###+") ➞ [3, 1]
hashPlusCount("##+++#") ➞ [3, 3]
hashPlusCount("#+++#+#++#") ➞ [4, 6]
hashPlusCount("") ➞ [0, 0]
```

Source: https://edabit.com/challenge/ydBcGvv3n447nbxCy

### 2. Write a JavaScript program to construct the following pattern, using a nested for loop.

----
Exercise done by: Chris

----
```
*
* *
* * *
* * * *
* * * * *
```
Source: https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php


### 3. Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.

----
Exercise: Done by Andrew

----

#### Examples:

```
makeTitle("This is a title") ➞ "This Is A Title"
makeTitle("capitalize every word") ➞ "Capitalize Every Word"
makeTitle("I Like Pizza") ➞ "I Like Pizza"
makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
```

Source https://edabit.com/challenge/LvtsCQNpx7CwHGubf

## Objects

### 1. Write a function, washCars() that takes in a array of car objects and sets the boolean properties of isDirty to false.

----
Exercise done by: Andrew

----

#### Example input:

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

#### Example output:

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

### 2. External source exercise 

----
Exercise: Done by Miguel

----
    var people = ["Greg", "Mary", "Devon", "James"];


1. Using a loop, iterate through this array and console.log all of the people.

2. Write the command to remove "Greg" from the array.

3. Write the command to remove "James" from the array.

4. Write the command to add "Matt" to the front of the array.

5. Write the command to add your name to the end of the array.

6. Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

Source: https://www.rithmschool.com/courses/javascript/javascript-arrays-exercise

### 3. Write a function, getOlder() that takes in array of dog objects and increases the value of each object's age property by 1.

----
Exercise: Done by Chris

----

#### Example input:

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

#### Example output:

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

# POD ASSESSMENT 2

## Miguel's Provided Exercises

### 1. Key Pressed Counter

----
Exercise: In progress by Andrew

----

Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.

Source: https://java.codeup.com/extra-exercises/javascript/dom-events/

### 2. A Pile of Sandwiches

----
Exercise: In progress by Chris

placed in the objects-exercises.js folder

----

Create a `function`, `makeSandwhichObjects()` that takes in two array of strings, breads and fillings and `returns` an array of sandwhichObjects that contain properties for bread and filling and values correspond to the same order of the two passed in arrays. Assume the two array inputs are the same length.

Source: https://java.codeup.com/extra-exercises/javascript/arrays-and-objects/

### 3. Simple Calculator

----
Exercise: In progress by Miguel

----

Create a simple calculator using `JavaScript`

Source: https://java.codeup.com/javascript-i/bom-and-dom/calculator/


## Andrew's Provided Exercises

### 1. Animated Icon

----
Exercise: In progress by

----

1. Create an animated icon on a mapbox map.

2. Add your animation to three different locations on your map.

#### Bonuses
> Can you generate different icons for each?

### 2. Responsive Progress Bar

----
Exercise: In progress by Miguel

----

Generate a progress bar that is responsive to buttons with preset values.
* Each button pushed should change the progress bar.

### 3. Make Breakout

----
Exercises: In progress by Andrew

----

Fade in and fade out all division elements.

https://www.w3resource.com/jquery-exercises/jquery-effects-exercises.php

## Chris' Provided Exercises

###  1. The Book List

----
Exercise: Done by Miguel

----

1. Create a webpage with an `h1` of `"My Book List"`.

2. Add a script tag to the bottom of the page, where all your JS will go.

3. Copy this array of books:

    ``` javascript
        var books = [
          {
            title: 'The Design of EveryDay Things',
            author: 'Don Norman',
            alreadyRead: false
          }, {
            title: 'The Most Human Human',
            author: 'Brian Christian',
            alreadyRead: true
          }
        ];
    ```
  
4. Iterate through the array of books. 

5. For each book, create a `p` element with the book title and author and append it to the page.

#### Bonuses:

1. Use a `ul` and `li` to display the books.

2. Add an `img` to each book that links to a URL of the book cover.

3. Change the style of the book depending on whether you have read it or not.

### 2. About Me

----
Exercise: Done by Andrew

----

1. Start with this HTML and save it as `about_me.html`

    ```html
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8"/>
          <title>About Me</title>
        </head>
        <body>
          <h1>About Me</h1>
    
          <ul>
            <li>Nickname: <span id="nickname"></span>
            <li>Favorites:  <span id="favorites"></span>
            <li>Hometown: <span id="hometown"></span>
          </ul>
        </body>
      </html>
    ```

2. Add a script tag to the bottom of the HTML body.

3. `(In the JavaScript)` Change the body tag's style so it has a `font-family` of `"Arial, sans-serif"`.

4. `(In the JavaScript)` Replace each of the `spans` (nickname, favorites, hometown) with your own information.

5. Iterate through each `li` and change the `class` to `"list-item"`.

6. `(In the HTML head)` Add a style tag that sets a rule for `.list-item` to make the color red.

7. Create a new `img` element and set its `src` attribute to a picture of you.
Append that element to the page.

### 3. Write a function named getRandomQuote().

----
Exercise in progress by: Chris

Placed in the objects-exercises.js folder

----

1. Inside of the function named `getRandomQuote`, create an array of strings where each string is a quote or thought you find inspirational.
2. `getRandomQuote` should generate a random number between `0` and the `array's length minus 1`
3. Use the randomly generated number as your index
4. `return` a random quote.


# POD ASSESSMENT 3

## Chris' Provided Exercises

### 1. Filter out Strings from an Array

--- 
Exercise: In progress by Andrew

---

Create a `function` that takes an `array` of non-negative numbers and strings and `return` a `new array` without the strings.

#### Examples:

```
filterArray([1, 2, "a", "b"]) ➞ [1, 2]
filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]
filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
```

### 2. Without Ten

--- 
Exercise: Done by

---

1. `return` a version of the given `array` where all the `10's` have been removed. 
2. The remaining elements should `shift` left towards the start of the `array` as needed, and the empty spaces at the end of the array should be 0.
3. So `{1, 10, 10, 2}` yields `{1, 2, 0, 0}`. 
- You may modify and `return` the given `array` or make a `new array`.

#### Examples:

```
withoutTen([1, 10, 10, 2]) → 1,2,0,0
withoutTen([10, 2, 10]) → 2,0,0
withoutTen([1, 99, 10]) → 1,99,0
```

### 3. Add up the numbers from a single number

--- 
Exercise: In progress by Chris 

Placed and labeled in the objects-exercises.js folder

---

1. Create a `function` that takes a number as an argument.
2. Add up all the numbers from `1` to the number you passed to the `function`.
3. For example, if the input is `4` then your `function` should return `10` because `1 + 2 + 3 + 4 = 10`.

## Andrew's Provided Exercises

### 1. DOM table manipulation

--- 
Exercise: Done by Chris

---


Write a JavaScript `function` that accept row, column, (to identify a particular cell) and a string to update the content of that cell.

Source: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

### 2. Class bonus to jQuery Effects

--- 
Exercise: In progress by Andrew

---

Use a `bootstrap modal` for the message that fades in after `8` seconds. You may find that you can use bootstrap's modal methods to achieve the fading effect.

### 3. DOM table manipulation from user

--- 
Exercise: Done by

---

Write a JavaScript `function` that creates a table, accept row, column numbers from the user, and input row-column number as content (e.g. Row-0 Column-0) of a cell.

Source: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

## Miguel's Provided Exercises

### 1. Bonus #1 from jQuery Effects

---
Exercise: Done by Miguel

---

Use a `bootstrap alert` for the dismissible message that shows on page load.

### 2. Convert Objects to Arrays

--- 
Exercise: Done by

---

Write a `function` that converts an `object` into an `array`, where each element represents a key-value pair.

```
toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]
toArray({}) ➞ []
```

### 3. Seven Boom!

---
Exercise: Done by

---

Create a `function` that takes an array of numbers and `return` "Boom!" if the number `7` appears in the array. Otherwise, `return` "there is no 7 in the array".

```
sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
```