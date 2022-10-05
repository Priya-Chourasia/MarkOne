
var readlineSync = require("readline-sync");
var score = 0;

var highScores = [
  {
    Name: "Rishi",
    Score: 2
  }, {
    Name: "Sandy",
    Score: 1
  }, {
    Name: "Ayushi",
    Score: 1
  }
]
function welcomeMsg() {
  var userName = readlineSync.question(" Hii! what is your name\n");
  console.log("\n Welcome " + userName)
  console.log("-----------------------------------------------------------------");
  console.log(" \n Let's see how well do you know me! So let's play\n ");
console.log("-----------------------------------------------------------------\n");

}
function showScore() {
  console.log("Your Score is : ", score);
  console.log("\n These are the high scores:  ")
   highScores.map((user) => console.log(user.Name + ": " + user.Score))
  console.log("\nIf you score more than the high scorers, then send me a screenshot of it and i will update it");
  console.log("\n THANK YOU FOR PLAYING. I HOPE YOU LIKE IT!")
 
}


function play(question, answer) {
  var userAnswer = readlineSync.question(question)
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("\n Right")
    score += 1;

  }
  else
    console.log("\n Wrong")


}


var quiz = [{
  question: " Q1: Where do i live ?",
  answer: "Bhopal"
}, {
  question: "Q2: what is my favourite color ?",
  answer: "black"
}, {
  question: "Q3: Where do i work ?",
  answer: "CG"
},{
  question: "Q4: Which netflix series i am currently watching?",
  answer: "Manifest"
}];
function game() {
  for (i = 0; i < quiz.length; i++) {
    currentQuestion = quiz[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

welcomeMsg();
game();
showScore();