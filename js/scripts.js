let beepBoopArray = [];
function beepBoop(userInput) {
  if (userInput === 0) {
    return beepBoopArray.push(userInput)
  } else if (userInput.includes(1)) {
    return beepBoopArray.push("Beep!");
  } else if (userInput === 2) {
    return beepBoopArray.push("Boop!");
  } else if (userInput === 3) {
    return beepBoopArray.push("Won't you be my neighbor?");
  }

  if (userInput != Number.isInteger(userInput)) {
    return false;
  }
}
beepBoop("10")
console.log(beepBoopArray);