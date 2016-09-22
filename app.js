'use strict';

//variables for questions and badInput
var q1 = 'Do you think this is really Marc?';//Yes
var q2 = 'Do you think I served in the Air Force?';//No
var q3 = 'Was I stationed in North Carolina?';//Yes
var q4 = 'I deployed to Afghanistan twice! Do you believe me?';//Yes
var q5 = 'Would you believe I worked in the US Embassy in El Salvador?';//No
var questionArray = [q1,q2,q3,q4,q5];

var a1y = 'You are correct! It is me!!';//correct answer
var a2y = 'Nope!  I served in the US Army';
var a3y = 'Fort Bragg IS in North Carolina... Well Done!';//correct answer
var a4y = 'How did you know the correct answer?!';//correct answer
var a5y = 'You are wise to believe me but this is not true!  I worked at the Embassy in Guatemala';
var yesAnswerArray = [a1y,a2y,a3y,a4y,a5y];

var a1n = 'WRONG! Believe it or not, It IS me';
var a2n = 'You\'re Right! If I wanted to join a country club I would have gone to PineHurst!';//correct answer
var a3n = 'Oops!  I WAS stationed in North Carolina';
var a4n = 'Nice try but I deployed to Afghanistan in 2008 and 2009';
var a5n = '*You got it! It was Guatemala not El Salvador!';//correct answer
var noAnswerArray = [a1n,a2n,a3n,a4n,a5n];

var badInput = 'You obviously don\'t know how to follow instructions! Next Question!';
var numCorrect = 0;
var questionsAsked = 0;
//Alert to user to set up guessing game
alert('Welcome to my page! Let\'s play a game! Type \'yes\' or \'no\' to answer the questions!  \'Y\' or \'N\' will work too!');
var user = prompt('To get things started, What is your Name?');

//questions 1 through 5
for (var i = 0; i < questionArray.length; i++){
  var answer = prompt(questionArray[i]).toLowerCase();
  questionsAsked++;
  if ((answer === 'y') || (answer === 'yes')){
    if (yesAnswerArray[i].charAt(yesAnswerArray[i].length - 1) === '!'){
      numCorrect++;
    }
    alert(yesAnswerArray[i]);
  } else if(answer === 'n' || answer === 'no'){
    if (noAnswerArray[i].charAt(noAnswerArray[i].length - 1) === '!'){
      numCorrect++;
    }
    alert(noAnswerArray[i]);
  } else{
    alert(badInput);
  }
  console.log('Question ' + (i + 1) + ': ' + questionArray[i] + ' :: User Answered : ' + answer);
  console.log(numCorrect + '/' + questionsAsked + ' answers correct');
}
//  question 6 - random number guessing
alert('You\'ve survived this far... Let\'s switch it up! How are you at guessing numbers? I\'ll give you FOUR guesses!');
//prepar variables for Q 6
var correctNumber = Math.floor(Math.random() * 10) + 1;
console.log('Number to Guess is: ' + correctNumber);
var guessesLeft = 4;
var numbersGuessed = Array(10).fill(false);

while (guessesLeft !== 0){
  var guess = parseInt(prompt('Pick a number between 1 and 10! Numbers ONLY! 1 and 10 are OK guesses! You have ' + guessesLeft + ' guesses left!'));
  console.log('User Guessed: ' + guess);
  if ((guess > 10) || (guess < 1) || (isNaN(guess))) {
    alert('I said between 1 and 10!');
  } else if (guess === correctNumber){
    alert('WOW! You actually got it!');
    numCorrect++;
    break;
  } else {
    if (numbersGuessed[guess - 1] === true){
      alert('You have already guessed this number!');
    } else {
      if (guess < correctNumber){
        alert('Too Low!');
      } else {
        alert('Too High!');
      }
      numbersGuessed[guess - 1] = true;
      guessesLeft--;
    }
  }
}
if (guessesLeft === 0){
  alert('BZZZZZZZZ!!!!! You Lose!!!');
}
questionsAsked++;
console.log(numCorrect + '/' + questionsAsked + ' answers correct');
//question 7 - guessing a value contained in a Array
alert('OK! How about some of my favorites?!');
guessesLeft = 6;
var subSandwich = ['ham', 'lettuce', 'pickles', 'tomatoes', 'salt', 'pepper', 'mustard' ];
console.log('Possible answers: ' + subSandwich);
var gotIt = false;
while (guessesLeft > 0){
  var foodGuess = prompt('Can you guess what goes on my favorite Subway sandwich? You have ' + guessesLeft + ' guesses left!').toLowerCase();
  console.log('User Guessed: ' + foodGuess);
  for (var j = 0; j < subSandwich.length; j++){
    if (foodGuess === subSandwich[j]){
      numCorrect++;
      alert('I can\'t believe you got that!');
      guessesLeft = 0;
      gotIt = true;
    }
  }
  if (gotIt === false){
    alert('That is incorrect. Keep Guessing!');
    guessesLeft--;
  }
}

if ((guessesLeft === 0) && (gotIt === false)){
  alert('You are HOPELESS!!!!! HAHAHAHA!');
}
questionsAsked++;
console.log(numCorrect + '/' + questionsAsked + ' answers correct');
alert('Thanks for Playing my game ' + user + '!! You got ' + numCorrect + ' correct!');
