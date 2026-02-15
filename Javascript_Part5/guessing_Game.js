// Guessing Game
// User enters a max number & then tries to guess a random generated number.
// between 1 to max.

let max = prompt("Enter the max number:");

let random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number:");

while (true) {
  if (guess == "exit") {
    console.log("User exit");
    break;
  }

  if (guess == random) {
    prompt("Congrats your number is correct", random);
    break;
  } else if (guess < random) {
    guess = prompt("hint: Your guess number small, Please try again");
  } else {
    guess = prompt("hint: Your guess number big, please try again");
  }

  // else {
  //     guess = prompt("Please try again!")
  // }
}
