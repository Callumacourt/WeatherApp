import sunny from './images/sunny.png';
import partlyCloudy from './images/partlyCloudy.png';
import rainy from './images/rain.png';
import lightRain from './images/lightRain.png';
import misty from './images/misty.png';
import Overcast from './images/overcast.png';
import Thunder from './images/thunderstorm.png';

const decideWeatherPic = currentCondition => {
  let src;

  switch (currentCondition) {
    case 'Sunny':
      src = sunny;
      break;
    case 'Partly cloudy':
      src = partlyCloudy;
      break;
    case 'Moderate or heavy rain shower':
      src = rainy;
      break;
    case 'Clear':
      src = sunny;
      break;
    case 'Light rain':
      src = lightRain;
      break;
    case 'Mist':
      src = misty;
      break;
    case 'Overcast':
      src = Overcast;
      break;
    default:
      if (currentCondition.includes('thunder')) {
        // Handle cases with thunder
        src = Thunder;
      } else if (currentCondition.includes('rain')) {
        src = rainy;
      } else {
        src = Overcast;
      }
      break;
  }

  return src;
};

export default decideWeatherPic;
