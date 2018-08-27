const getSleepHours = day => {
  switch (day){
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 8
      break;
    case 'friday':
      return 6
      break;
    case 'saturday':
      return 9
      break;
    case 'sunday':
      return 8
      break;
    default:
      return 'Error!';
  }
};

const getActualSleepHours = () => getSleepHours('monday') +
      getSleepHours('tuesday') +
      getSleepHours('wednesday') +
      getSleepHours('thursday') +
      getSleepHours('friday') +
      getSleepHours('saturday') +
      getSleepHours('sunday');

const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
  console.log(`You got ${idealSleepHours} hour (s) of sleep this week. Good Job!!`);
} else if (actualSleepHours > idealSleepHours) {
  console.log(`You got ${actualSleepHours} hour (s) of sleep this week.`);
} else {
  console.log("You got " + (idealSleepHours - actualSleepHours) + " hour less sleep than you needed this week. Get some rest.");
}
}


console.log(getSleepHours('friday'))
console.log(getIdealSleepHours())
calculateSleepDebt()
