var player1Name = "";
var player2Name = "";
var player1Score = 0;
var player2Score = 0;
function startGame(){
    player1Name = document.getElementById("player1NameInput").value;
    player2Name = document.getElementById("player2NameInput").value;
    localStorage.setItem("Player 1", player1Name);
    localStorage.setItem("Player 2", player2Name);
    window.location = "gamePage.html";
}