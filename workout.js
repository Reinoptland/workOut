const _ = require('underscore');

// In dit bestand worden de workouts aangemaakt

const exerciseMuscle = ['sawing', 'backpush', 'squad', 'biceps', 'triceps', 'chest', 'back', 'lower-arm', 'leggs', 'shoulders'];
const exerciseCardio = ['running', 'cycling', 'stairmaster'];

const workout = (exercises, count) => {
  return _.sample(exercises, [count]);
}

// Ik maak van workOutMuscle en workoutCardio functies die ik kan aanroepen
// Op die manier krijg ik telkens andere exercises i.p.v. dezelfde
const workOutMuscle = count => workout(exerciseMuscle, count);
const workOutCardio = count => workout(exerciseCardio, count);

module.exports = {
  // Als de key van een objecet hetzelfde is als de value kun je het zo opschrijven
  workOutMuscle,
  workOutCardio
  // Dit is het zelfde als workOutMuscle: workOutMuscle, workOutCardio: workOutCardio
};
