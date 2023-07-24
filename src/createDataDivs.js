import picGenerator from './picGenerator';
import unitSwitcher from './unitSwitcher';

export default function createDataDivs(weatherData) {
  const container = document.querySelector('.container');
  Object.entries(weatherData).forEach(([key, value]) => {
    const div = document.createElement('div');
    div.classList.add(key);
    if (key === 'tempCelsius') {
      div.innerHTML = `${value}°C`;
    } else if (key === 'tempFahrenheit') {
      div.innerHTML = `${value}F`;
      div.style.display = 'none';
    } else {
      div.innerHTML = `${value}`;
    }
    container.appendChild(div);
  });
  const weatherPicDiv = document.createElement('img');
  weatherPicDiv.classList.add('pic');
  container.appendChild(weatherPicDiv);
  const currentCondition = weatherData.current;
  weatherPicDiv.src = picGenerator(currentCondition);

  const unitSwitcherBtn = document.createElement('button');
  unitSwitcherBtn.classList.add('unitSwitcherBtn');
  unitSwitcher(unitSwitcherBtn);
  unitSwitcherBtn.addEventListener('click', () => {
    unitSwitcher(unitSwitcherBtn);
  });
  container.appendChild(unitSwitcherBtn);
}
