const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('./../users/users-model')

router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    const new_user = { username, password: hash }
    const result = await User.add(new_user)
    res.status(201).json({
      message: `nice to have you, ${result.username}`
    })
  } catch (err) {
    next(err)
  }
})

router.post('/login', async (req, res, next) => {
  res.json({ message: 'login working'})
})

router.get('/logout', async (req, res, next) => {
  res.json({ message: 'logout working'})
})

module.exports = router
