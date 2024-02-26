"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Nadia Gainer
      Date: 02/25/24

      Filename: project05-01.js
*/

//Declare timeID variable & questionList variable//
let timeID = undefined;
let questionList = document.querySelectorAll("div#quiz input")

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

//add onclick event handler to startQuiz//
startQuiz.onclick = function () {
// overlay is "showquiz"
  overlay.className = "showquiz";
// countdown function//
  timeID = setInterval(function theInnerFunc () {
    countdown();
  }, 1000);
};

// function countdown
function countdown() {
  // when timeLeft = 90
  if (timeLeft === 90) {
    // timeID cleared
    clearInterval(timeID);

// number of correct answers
    const totalCorrect = checkAnswers();

    // answers are correct//
    if (totalCorrect === correctAnswers.length) {

// congratulations message//
  window.alert("Congratulations, you recieved 100%")
  }else {
// otherwise display the number of wrong answers 
  window.alert(`Number of wrong answers are:${questionList.length - totalCorrect}`);

//additional variables//
  timeLeft = quizTime;
  quizClock.value = timeLeft;
  overlay.className = "hidequiz";
    }
  } else {
// otherwise, subtract 1 from timeLeft
    timeLeft = timeLeft - 1;
    quizClock.value = timeLeft;
  }
}



// and the node list for questions






















