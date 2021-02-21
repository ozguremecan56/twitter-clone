const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')
const TweetService = require('../services/tweet-service')

router.get('/all', async (req, res) => {
  const users = await UserService.findAll()
  //res.render('list', { items: users })
  res.send(users)
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
  //create a tweet
  const tweet = await TweetService.add(req.body)
  //get the user
  const user = await UserService.find(req.params.id)
  //add user to tweet
  tweet.user = user
  //save the current tweet
  await tweet.save()
  //add tweet to user
  user.tweets.push(tweet)
  //save the current user
  await user.save()
  
  res.status(201).json(tweet)
})



module.exports = router
