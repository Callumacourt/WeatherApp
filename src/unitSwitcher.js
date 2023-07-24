let currentUnit = 'celsius'; // Assuming the default unit is Celsius
export default function unitSwitcher(switcher) {
  const unitSwitcherButton = switcher;
  const fahrenheitDiv = document.querySelector('.tempFahrenheit');
  const celsiusDiv = document.querySelector('.tempCelsius');

  if (currentUnit === 'celsius') {
    // If current unit is Celsius, make Fahrenheit div invisible
    fahrenheitDiv.style.display = 'none';
    celsiusDiv.style.display = 'block'; // Make Celsius div visible
    unitSwitcherButton.innerText = 'Fahrenheit'; // Set the text of the button
    currentUnit = 'fahrenheit'; // Update currentUnit to Fahrenheit
  } else {
    // If current unit is Fahrenheit, make Celsius div invisible
    celsiusDiv.style.display = 'none';
    fahrenheitDiv.style.display = 'block'; // Make Fahrenheit div visible
    unitSwitcherButton.innerText = 'Celsius'; // Set the text of the button
    currentUnit = 'celsius'; // Update currentUnit to Celsius
  }
}
