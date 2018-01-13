// In dit is het 'hoofdbestand' van deze applicatie, dus die noem ik 'app'

const express = require('express');
// Hier maak je je express webserver aan
const app = express();

const { workOutMuscle, workOutCardio } = require('./workout.js');

// Hier definier je de routes die je webserver kent.

// get '/'
app.get('/', function (req, res) {

  // Met res.send stel je in wat de de webserver moet terug sturen naar
  // iemand die een request doet naar deze route
  // Ik stuur hier 1 object terug met workOutCardio en workOutMuscle

  res.send({ workout: { muscles: workOutMuscle(4), cardio: workOutCardio(1) } })
})

// get '/twice'
app.get('/twice', function (req, res) {
  res.send({
    workout1: {
      muscles: workOutMuscle(4),
      cardio: workOutCardio(1)
    },
    workout2: {
      muscles: workOutMuscle(4),
      cardio: workOutCardio(1)
    }
  })
})


app.listen(3000, () => console.log('yes, the server is listening on port 3000!'));
