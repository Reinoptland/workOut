const _ = require('underscore');
const express = require('express');
const app = express();

const exerciseMuscle = ['sawing', 'backpush', 'squad', 'biceps', 'triceps', 'chest', 'back', 'lower-arm', 'leggs', 'shoulders'];
const exerciseCardio = ['running', 'cycling', 'stairmaster'];

const workOutMuscle = _.sample(exerciseMuscle,[4]);
const workOutCardio = _.sample(exerciseCardio,[1]);

app.get('/', function (req, res) {
  res.send(workOutMuscle)
})

app.listen(3000, () => console.log('yes, the server is listening on port 3000!'));

module.exports = {
  workOutMuscle: workOutMuscle,
  workOutCardio: workOutCardio
};
