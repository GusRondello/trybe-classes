const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
const logMonths = (object) => {
    const {...seasons} = object;
    return console.log([month1, month2, month3] = seasons);
}
logMonths(yearSeasons);