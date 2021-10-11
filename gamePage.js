var player1Name = localStorage.getItem("Player 1");
var player2Name = localStorage.getItem("Player 2");
var player1Score = 0;
var player2Score = 0;
var asking = player1Name;
var answering = player2Name;
var pinkP = "";
var displayQuestion = "";
var answerInput = "";
var checkButton = "";
var row = "";
// ||
// https://github.com/Astrd1594/C89-Maths-Quiz-Part4/upload
function check(){
    var number1 = document.getElementById("number1Input").value;
    var number2 = document.getElementById("number2Input").value;
    var playeranswer = document.getElementById("answerInput").value;
    var realanswer = number1 * number2;
    pinkP = "";
    displayQuestion = "";
    answerInput = "";
    checkButton = "";
    row = pinkP + displayQuestion + answerInput + checkButton;
    document.getElementById("output").innerHTML = row;
    if(playeranswer == realanswer){
        if(answering == player1Name){
            player1Score = player1Score + 1;
        } else if(answering == player2Name){
            player2Score = player2Score + 1;
        }
        localStorage.setItem(player1Name + " (player 1)", player1Score);
        document.getElementById("player1Score").innerHTML = player1Name + ": " + player1Score;
        document.getElementById("player2Score").innerHTML = player2Name + ": " + player2Score;
        if(answering == player1Name && asking == player2Name){
            answering = player2Name;
            asking = player2Name;
            document.getElementById("answerTurn").innerHTML = "Answering - " + answering;
            document.getElementById("questionTurn").innerHTML = "Asking - " + asking;
        }
        if(answering == player2Name && asking == player1Name){
            answering = player1Name;
            asking = player2Name;
            document.getElementById("answerTurn").innerHTML = "Answering  - " + answering;
            document.getElementById("questionTurn").innerHTML = "Asking - " + asking;
        }
    } else if(playeranswer > realanswer || playeranswer < realanswer){
        if(answering == player2Name){
            player1Score = player1Score + 1;
            answering = player2Name;
            asking = player1Name;
            document.getElementById("answerTurn").innerHTML = "Answering - " + answering;
            document.getElementById("questionTurn").innerHTML = "Asking - " + asking;
        }
        if(answering == player1Name){
            player2Score = player2Score + 1;
            answering = player2Name;
            asking = player1Name;
            document.getElementById("answerTurn").innerHTML = "Answering - " + answering;
            document.getElementById("questionTurn").innerHTML = "Asking - " + asking;
        }
    }
}
function setText(){
    document.getElementById("player1Score").innerHTML = player1Name + ": " + player1Score;
    document.getElementById("player2Score").innerHTML = player2Name + ": " + player2Score;
    document.getElementById("questionTurn").innerHTML = "Asking -  " + asking;
    document.getElementById("answerTurn").innerHTML = "Answering - " + answering;
}
function send(){
    var number1 = document.getElementById("number1Input").value;
    var number2 = document.getElementById("number2Input").value;
    var answer = number1 * number2;
    pinkP = "<div class='pink' id='pinkk'><p class='pinkP'>_____</p></div>"
    displayQuestion = "<p id='displayQuestion'>? x ? = ?</p>";
    answerInput = "<input id='answerInput' class='form-control' placeholder='Type here...' type='number'><br>";
    checkButton = "<span><button id='checkButton' class='btn btn-warning' type='button' onclick='check()'>Check</button></span><br><br>";
    row = pinkP + displayQuestion + answerInput + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("displayQuestion").innerHTML = number1 + " x " + number2;
    document.getElementById("number1Input").innerHTML = "";
    document.getElementById("number2Input").innerHTML = "";
    number1 = document.getElementById("number1Input").value;
    number2 = document.getElementById("number2Input").value;
    console.log("Number 1: " + number1);
    console.log("Number 2: " + number2);
    console.log("Equation answer: " + answer);
}