var userScore = 0;
var computerScore = 0;
const userScore_span= document.getElementById("user-score");
const computerScore_span= document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("sp");

var username = prompt("Please enter your username", "Username");

if (username!= null) {

    document.getElementById("user-label").innerHTML = username;

}

function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'sp'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}
getComputerChoice();

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter ==="p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizrad";
    if (letter === "sp") return "Spock";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(userChoice) + " beats " + convert(computerChoice) + ". You win!&#128522;";
    scoreBoard_div.classList.add('greenglow');
    setTimeout(function() {scoreBoard_div.classList.remove('greenglow')},300)
}
function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
     result_p.innerHTML = convert(userChoice) + " loses to " + convert(computerChoice) + ". You lost!&#128533;";
    scoreBoard_div.classList.add('redglow');
    setTimeout(function() {scoreBoard_div.classList.remove('redglow')},300)
}
function draw(userChoice, computerChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = convert(userChoice) + " draws with " + convert(computerChoice) + ". It's a draw!&#128529;";
    scoreBoard_div.classList.add('greyglow');
    setTimeout(function() {scoreBoard_div.classList.remove('greyglow')},300)
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
   // console.log("computer choice: " + computerChoice);
   // console.log("user choice: " + userChoice);
   switch(userChoice + computerChoice){
       case "rs":
       case "pr":
       case "sp":
       case "rl":
       case "lsp":
       case "sps":
       case "sl":
       case "lp":
       case "psp":
       case "spr":
            win(userChoice, computerChoice);
            break;
       case "rp":
       case "ps":
       case "sr":
       case "lr":
       case "lsp":
       case "ssp":
       case "ls":
       case "pl":
       case "spp":
       case "rsp":
            lose(userChoice, computerChoice);
            break;
       case "rr":
       case "pp":
       case "ss":
       case "spsp":
       case"ll":
            draw(userChoice, computerChoice);
            break;
   } 
}
game();

function main(){
rock_div.addEventListener('click', function(){
    game("r");
})
paper_div.addEventListener('click', function(){
   game("p");
})
scissors_div.addEventListener('click', function(){
    game("s");
})

lizard_div.addEventListener('click', function(){
    game("l");
})

spock_div.addEventListener('click', function(){
    game("sp");
})
}

main();