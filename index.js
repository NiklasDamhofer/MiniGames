const options = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    choice = Math.floor(Math.random() * 3)
    return(options[choice])
}

function getPlayerChoice() {
    const input = prompt("Rock Paper or Scissors?: ");
    return(input)
}

function checkInput() { 
    if (player.toLowerCase() !== "rock" || player !== "paper" || player != "scissors") {
        console.log("Please enter a valid choice!!");
    } else {
        return player[0].toUpperCase() + player[1, length];
    ;
    }
}

function checkChoice() {
    let lower = getPlayerChoice().toLowerCase();
    let length = lower.length;
    let player = lower[0].toUpperCase() + lower.slice(1, length);
    let computer = getComputerChoice();

    console.log("Computers choice: " + computer + "! Players choice: " + player + "!");

    if (computer == "Rock" && player == "Scissors") {
        console.log("You lost! Try again later!");
    } else if (computer == "Rock" && player == "Paper") {
        console.log("You won! The computer wants a rematch!");
    } else if (computer == "Paper" && player == "Scissors") {
        console.log("You won! The computer wants a rematch!");
    } else if (computer == "Paper" && player == "Rock") {
        console.log("You lost! Try again later!");
    } else if (computer == "Scissors" && player == "Paper") {
        console.log("You lost! Try again later!");
    } else if (computer == "Scissors" && player == "Rock") {
        console.log("You won! The computer wants a rematch!");
    } else if (computer == player) {
        console.log("Choose again you had the same choice")
    } else {
        console.log("Ivalid input try again!!")
    }
}

checkChoice()

