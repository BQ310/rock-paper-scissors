function getComputerChoice() {
    value = Math.random();
    if (value < 0.33) {
        return "rock";
    } else if (value > 0.33 && value < 0.66) {
        return "paper";
    } else {
        return "scissors";
    };
};

function round(playerSelection, computerSelection) {
    ps = playerSelection.toLowerCase();
    rules = {"rock" : "paper", "paper":"scissors","scissors":"rock"};
    if (ps == computerSelection) {
        return "Draw!" + ps + "and" + computerSelection + "cancel!";
    }
    if (rules[ps] == computerSelection) {
        return "You Win!" + ps + "beats" + computerSelection;
    } else {
        return "You Lose!" + computerSelection + "beats" + ps;
    }
};