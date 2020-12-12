
// importing
const chalk = require("chalk");
const log = console.log;

// importing
var readlineSync = require('readline-sync');

var score = 0; //assigning score

var userName = readlineSync.question(log(chalk.yellow.bold("May i know your name please? "))); //input and processing

console.log("-------------------------------")

console.log("Welcome " + userName + ", Question are about BAHUBALLI movie!! , choose the right option. ALL THE BEST!!! "); //output

console.log("-------------------------------")

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right answer");
    score = score + 1;

  } else {
    console.log("wrong");
  }
  console.log("Your score is: ", score);
  console.log("-------------------------------")
}

// array of objects

var questions = [{
  question: ` 1) Who is the director of BAHUBALLI?
  a:Rajamouli 
  b:Vinayak 
  c:Sukumar \n`,
  answer: "a"
},
{
  question: `2) Who is the HERO of BAHUBALLI movie?  
  a:NTR
  b:Prabhas
  c:Ram Charan \n `,
  answer: "b"
},
{
  question: `3) Who is the HEROIN of BAHUBALLI movie? 
  a:Kajal
  b:Samantha
  c:Anushka \n` ,
  answer: "c"
},
{
  question: `4) Who is the MUSIC DIRECTOR of BAHUBALLI movie? 
  a:Tamman
  b:D.S.P
  c:keeravani \n` ,
  answer: "c"
},
{
  question: `4) On which PRODUCTION BANNER,BAHUBALLI movie was DIRECTED? 
  a:DVV
  b:ARKA MEDIA
  c:SVCC \n` ,
  answer: "b"
},
]

//for loop

for (i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

// printing the final score 
console.log((log(chalk.green.bold(("Hurray!!! You SCORED:")))), score);

//data of high score

var highScore = [
  {
    name: "naidu",
    score: 4,
  },

  {
    name: "subbu",
    score: 3,
  },
]

for(let i=0; i<highScore.length;i++) {
  const score = highScore[i]["score"]
}

console.log (highScore)