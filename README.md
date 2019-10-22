#POD ASSESSMENT 1

##GROUP NAME: FRANKESTEIN

Below is a designated list separated by individual

##BOM & DOM

### 1. Memory Card Game

Source: https://java.codeup.com/appendix/extra-challenges/memory-game/

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

### 2. Whack-A-Mole Game

Source: https://java.codeup.com/jquery/whack-a-mole/create-game/

http://en.wikipedia.org/wiki/Whac-A-Mole is a popular game created in the 1970s. The game randomly has plastic (or wooden) moles pop out of holes, and the object of the game is to hit the moles and have them go back in their hole.

BUILDING WHACK-A-MOLE

We will be building an online version of the Whack-A-Mole game using HTML, CSS, and jQuery.

https://www.youtube.com/watch?v=IlQs7uzULs0

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

###3. Change Text Style - external source

Source: https://www.w3resource.com/javascript-exercises/javascript-dom-exercises.php

Problem #1: Modify the style of the paragraph text through javascript code.

================================================================================

##LOOPS

###1. Create a function that returns the number of hashes and pluses in a string.

Examples:
hashPlusCount("###+") ➞ [3, 1]

hashPlusCount("##+++#") ➞ [3, 3]

hashPlusCount("#+++#+#++#") ➞ [4, 6]

hashPlusCount("") ➞ [0, 0]
source https://edabit.com/challenge/ydBcGvv3n447nbxCy

###2. Write a JavaScript program to construct the following pattern, using a nested for loop.

*
* *
* * *
* * * *
* * * * *
source https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php

###3. Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
----------Andrew-------------------------
Examples:
makeTitle("This is a title") ➞ "This Is A Title"

makeTitle("capitalize every word") ➞ "Capitalize Every Word"

makeTitle("I Like Pizza") ➞ "I Like Pizza"

makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
source https://edabit.com/challenge/LvtsCQNpx7CwHGubf