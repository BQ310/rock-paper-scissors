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

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const ps = button.innerText;
        const cs = getComputerChoice();
        const result = playRound(ps, cs);
        const main = document.querySelector('.main');
        main.innerHTML = result[1];
    })
});