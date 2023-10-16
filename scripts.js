function getComputerChoice() {
    let value = Math.random();
    if (value < 0.33) {
        return "rock";
    } else if (value > 0.33 && value < 0.66) {
        return "paper";
    } else {
        return "scissors";
    };
};

function playRound(playerSelection, computerSelection) {
    let ps = playerSelection.toLowerCase();
    let rules = {"rock" : "paper", "paper" : "scissors", "scissors" : "rock"};
    if (ps == computerSelection) {
        return [0, "Draw! " + ps + " and " + computerSelection + " cancel!"];
    }
    if (rules[computerSelection] == ps) {
        return [1, "You Win! " + ps + " beats " + computerSelection];
    } else {
        return [-1, "You Lose! " + computerSelection + " beats " + ps];
    }
};

function game() {
    let player = 0;
    for (let i = 0; i < 5; i++) {
        let ps = prompt("Enter your move", "rock");
        let cs = getComputerChoice();
        let result = playRound(ps, cs);
        player += result[0];
        console.log(result[1]);
    };
    if (player < 0) {
        console.log("You lose");
    } else if (player > 0) {
        console.log("You Win");
    } else {
        console.log("Its a draw");
    }
};

game();