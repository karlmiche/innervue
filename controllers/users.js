const express = require('express');
const router = express.Router();

// load user model
const User = require('../models/User');

// test route
router.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the users endpoint'});
});

// get user's answered questions from database
router.get('/:userId/questions', (req, res) => {
  let userId = req.params.userId;
  res.send(`<h1>🦦Get user ${userId}'s answered quesitons 🦦</h1>`);
});

// contact google sentiment API and add answered question to user
router.post('/:userId/questions', (req, res) => {
  let userId = req.params.userId;
  res.send(`<h1>🐈 Add an answered question for user ${userId} 🐈</h1>`);
});

// do registration auth and create a new user
router.post('/register', (req, res) => {
  res.send('<h1>🐿 Register a user 🐿</h1>');
});

// do login auth and log user in
router.post('/login', (req, res) => {
  res.send('<h1>🦥 Log user in 🦥</h1>');
});

router.get('/current', (req, res) => {
  res.send('<h1>🦘 Check user credentials 🦘</h1>');
});


module.exports = router;
