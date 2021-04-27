const router = require('express').Router();
const User = require('../models/user.model');
let Exercise = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercises = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercises
    .save()
    .then((exercises) => res.json('Exercise added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});
module.exports = router;
