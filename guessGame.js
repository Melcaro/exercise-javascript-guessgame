const mysteryNumber = 9;

const userNumber = prompt('Donnez un chiffre');

if (userNumber < mysteryNumber) {
  alert('Votre chiffre est plus petit que le mien');
} else if (userNumber > mysteryNumber) {
  alert('Votre chiffre est plus grand que le mien');
} else {
  alert('Bravo, vous avez trouvé le chiffre mystère! ');
}

/*GUESS GAME ADVANCED

const mysteryNumber = 9;

function askUser(numberRepeat) {
  const userInput = prompt('Devinez le chiffre mystère :');
  const userNumber = Number(userInput);
  const hasWon = verifyNumber(userNumber);
  if (!hasWon && numberRepeat > 1) {
    askUser(numberRepeat - 1);
  } else if (!hasWon && numberRepeat === 1) {
    alert('Vous avez perdu :(');
  }
}

function verifyNumber(num) {
  if (num > mysteryNumber) {
    alert('Votre chiffre est plus grand que le mien');
    return false;
  } else if (num < mysteryNumber) {
    alert('Votre chiffre est plus petit que le mien');
    return false;
  } else {
    alert('Bravo vous avez trouvé le chiffre mystère !');
    return true;
  }
}
askUser(5);
*/
