// ecrire le code de conversion ici
let celsius;

// Conversion Celsius à Fahrenheit
function celsiusToFahrenheit(celsius) {
  // ecrire le code de conversion ici
  let fahrenheit;
  fahrenheit=(celsius*(9/5))+32;

  return fahrenheit;
}
console.log(celsiusToFahrenheit(25));

// les lignes suivantes ne sont pas à modifier
module.exports = { celsiusToFahrenheit };
