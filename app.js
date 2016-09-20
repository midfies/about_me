"use strict";

//variables for questions and badInput
var q1 = 'Do you think this is really Marc?';
var q2 = 'Do you think I served in the Air Force?';
var q3 = 'Was I stationed in North Carolina?';
var q4 = 'I deployed to Afghanistan twice! Do you believe me?';
var q5 = 'Would you believe I worked in the US Embassy in El Salvador?';
var badInput = 'You obviously don\'t know how to follow instructions! Next Question!'

//Alert to user to set up guessing game
alert('Welcome to my page! Let\'s play a game! Type \'yes\' or \'no\' to answer the questions!  \'Y\' or \'N\' will work too!')

//Question 1 - Do yo think it is me?
  var reallyMe = prompt(q1);
  //if user guessed yes or y
  if ((reallyMe === 'y') || (reallyMe === 'yes')){
    alert('You are correct! It is me!!');
  }
  //if user guessed no or n
  else if(reallyMe === 'n' || reallyMe === 'no'){
    alert('WRONG! Believe it or not, It is me!!');
  }
  //if something was answered other than yes or no, y or n
  else{
    alert(badInput);
  }
  console.log('Q1 - User answer = \'' + reallyMe + '\' in response to: ' + q1);



//Question 2 - Was I in the airforce?
  var militaryBranch = prompt(q2);
  //if user guessed yes or y
  if ((militaryBranch === 'y') || (militaryBranch === 'yes')){
    alert('Nope!  I served in the US Army!');
  }
  //if user guessed no or n
  else if(militaryBranch === 'n' || militaryBranch === 'no'){
    alert('You\'re Right! If I wanted to join a country club I would have gone to PineHurst!');
  }
  //if something was answered other than yes or no, y or n
  else{
    alert(badInput);
  }
  console.log('Q2 - User answer = \'' + militaryBranch + '\' in response to: ' + q2);



//Question 3 - Was I stationed in North Carolina?
  var dutyStation = prompt(q3);
  //if user guessed yes or y
  if ((dutyStation === 'y') || (dutyStation === 'yes')){
    alert('Fort Bragg IS in North Carolina... Well Done!');
  }
  //if user guessed no or n
  else if(dutyStation === 'n' || dutyStation === 'no'){
    alert('Oops!  I WAS stationed in North Carolina.');
  }
  //if something was answered other than yes or no, y or n
  else{
    alert(badInput);
  }
  console.log('Q3 - User answer = \'' + dutyStation + '\' in response to: ' + q3);



//Question 4 - I deployed to Afghanistan twice! Do you believe me?
  var deployments = prompt(q4);
  //if user guessed yes or y
  if ((deployments === 'y') || (deployments === 'yes')){
    alert('How did you know the correct answer?');
  }
  //if user guessed no or n
  else if(deployments === 'n' || deployments === 'no'){
    alert('Nice try but I deployed to Afghanistan in 2008 and 2009');
  }
  //if something was answered other than yes or no, y or n
  else{
    alert(badInput);
  }
  console.log('Q4 - User answer = \'' +  deployments + '\' in response to: ' + q4);



//Question 5 - Would you believe I worked in the US Embassy in El Salvador?
  var embassyWork = prompt(q5);
  //if user guessed yes or y
  if ((embassyWork === 'y') || (embassyWork === 'yes')){
    alert('You are wise to believe me but this is not true!  I worked at the Embassy in Guatemala!');
  }
  //if user guessed no or n
  else if(embassyWork === 'n' || embassyWork === 'no'){
    alert('You got it! It was Guatemala not El Salvador');
  }
  //if something was answered other than yes or no, y or n
  else{
    alert(badInput);
  }
  console.log('Q5 - User answer = \'' + embassyWork + '\' in response to: ' + q5);
