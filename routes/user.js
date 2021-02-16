const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const TweetService = require('../services/tweet-service')

router.get('/all', async (req, res) => {
  const users = await UserService.findAll()
  res.render('list', { items: users })
})

router.get('/:id', async (req, res) => {
  const user = await UserService.find(req.params.id)
  res.render('data', { data: user })
})

router.post('/', async (req, res) => {
  const user = await UserService.add(req.body)
  res.send(user)
})

router.delete('/:id', async (req, res) => {
  const user = await UserService.del(req.params.id)
  res.send(user)
})

router.post('/:id/tweets', async (req, res) => {
  const user = await UserService.find(req.params.id)
  const tweet = await TweetService.find(req.body.tweet)
  await UserService.attendMeetup(user, tweet)

  res.send(user)
})



module.exports = router
