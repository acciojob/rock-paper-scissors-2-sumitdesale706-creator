# Rock Paper Scissors

Let's build the game of <b>Rock, Paper and Scissors!</b> (Learn game <a href='https://en.wikipedia.org/wiki/Rock_paper_scissors' target=”_blank”>here</a>). 
 

 <b>This is how you may proceed:</b>
 
 <ul>
 
 <li>Take number of turns in a game from the user ( an input box of type number ). </li>
 
 <li>Start the game when the user clicks the play button. </li>
 
 <li> User can select (Rock, Paper, Scissors ) from clickable DOM object ( such as button, div, image etc ) </li>
 
 <li> You have to keep count of User Points, Computer Points, turns left and result of the round. You have to show what computer chooses as text </li>
 
 <li>If there's no round left then show game result </li>
 
 <li> Do Not hide input box and play button </li>
 
 <li>Show the round Result after each round</li>
 

 Acceptance Criteria ( attribute = data-ns-test ) :-
 
 Eg :- data-ns-test="attribute value given below"
 
1. Use “game-number” attribute-value for INPUT Tag element (number of turns in the game)

 2. Use “play-game” attribute-value for the play button

 3. Use “rock”, “paper”, “scissors” attribute-values for rock, paper, scissors (clickable DOM objects) respectively.
 
4. Use “computer-choose” attribute-value which renders “SCISSORS”, “PAPER” or “ROCK” for computer choice in the game.

 5. Use “round-result” attribute-value to show the result of the particular round which renders “WON”, “TIE” and “LOSE” after each round.
 
6. Use “rounds-left”, “user-points”, and “computer-points” attribute-values for rounds left, user points, and computer points respectively which renders the number of round-left, user-points, and computer-points, and Update them after each round.

 7. Use “game-result” attribute-value which will have values “WON”, “TIE” or “LOSE” to show the result of the game.
 
8. Create a <code>window.computerChoose</code> property denoting computer choice having value in [0, 1, 2] in each round for ["ROCK", "PAPER", "SCISSORS"] respectively.
