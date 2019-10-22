const mysteryNumber = 9;

const userNumber = prompt('Donnez un chiffre');

if (userNumber < mysteryNumber) {
  alert('Votre chiffre est plus petit que le mien');
} else if (userNumber > mysteryNumber) {
  alert('Votre chiffre est plus grand que le mien');
} else {
  alert('Bravo, vous avez trouvé le chiffre mystère! ');
}
