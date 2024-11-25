var secretNumber = 7;

var guess = Number(prompt(console.log("enter your guess")));



  if (guess != secretNumber) {
    if (guess < secretNumber) {
      console.log("too low");
    } else {
      console.log("too high");
    }
  } else {
    console.log("congragulations!you gussed right");
  }
  

