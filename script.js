

const inputMove = function() {
    let validMoves = ['r', 'rock', 'p', 'paper', 's', 'scissors']
    let userMove = 0;
    userMove = prompt("rock paper scissors?");
    while (!validMoves.includes(userMove)) {
        userMove = prompt('try again, silly');
    }

    if (userMove === 'r') {userMove = 'rock'};
    if (userMove === 'p') {userMove = 'paper'};
    if (userMove === 's') {userMove = 'scissors'};
    console.log("player chose: " + userMove);
    return userMove;
}

const cpuTurn = function() {
    let cpuMove = Math.random()
    console.log("rolled:" + cpuMove)
    if (cpuMove <= 0.33) {
        cpuMove = 'rock';
    }
    else if (cpuMove <= 0.67) {
        cpuMove = 'paper';
    }
    else {
        cpuMove = 'scissors';
    }
    console.log("cpu chose: " + cpuMove);
    return cpuMove;
}


const callMatch = function() {
    let userMove = inputMove();
    let cpuMove = cpuTurn();
    if (cpuMove === userMove) {
        alert("I chose " + cpuMove + ". It's a draw!")
        }
    else if (cpuMove === 'rock') {
        if (userMove === 'paper') {
            alert("I chose rock. You win!")
        }
        if (userMove === 'scissors') {
            alert("Rock smashes scissors. I win!")
        }}
    else if (cpuMove === 'paper') {
        if (userMove === 'scissors') {
            alert("I chose paper. You win!")
        }
        if (userMove === 'rock') {
            alert("Paper covers rock. I win!")
        }}
    else if (cpuMove === 'scissors') {
        if (userMove === 'rock') {
            alert("I chose scissors. You win!")
        }
        if (userMove === 'paper') {
            alert("Scissors cut paper. I win!")
        }}
}