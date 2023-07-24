import sunny from './sunny.png';
import partlyCloudy from './partlyCloudy.png';
import rainy from './rain.png';
import lightRain from './lightRain.png';
import misty from './misty.png';
import Overcast from './overcast.png';
import Thunder from './thunderstorm.png';
import thunderRain from './thunderRain.png';

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
