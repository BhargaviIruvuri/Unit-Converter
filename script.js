function convertCelsiusToFahrenheit() {
  var celsiusInput = document.getElementById("celsiusInput");
  var fahrenheitResult = document.getElementById("fahrenheitResult");
  var celsius = parseFloat(celsiusInput.value);
  var fahrenheit = (celsius * 9 / 5) + 32;
  fahrenheitResult.value = fahrenheit.toFixed(2);
}

function convertFahrenheitToCelsius() {
  var fahrenheitInput = document.getElementById("fahrenheitInput");
  var celsiusResult = document.getElementById("celsiusResult");
  var fahrenheit = parseFloat(fahrenheitInput.value);
  var celsius = (fahrenheit - 32) * 5 / 9;
  celsiusResult.value = celsius.toFixed(2);
}
