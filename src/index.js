import Settings from './js/Settings';

const sett = new Settings();

const normDifficculty = sett.changeSettings('difficulty', 'normal');
const hardDifficculty = sett.changeSettings('difficulty', 'hard');

console.log(normDifficculty, hardDifficculty);
