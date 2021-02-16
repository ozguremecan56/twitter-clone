const express = require('express')
const router = express.Router()

const TweetService = require('../services/tweet-service')

router.get('/all', async (req, res) => {
  const tweets = await TweetService.findAll()
  res.render('list', { items: tweets })
})

router.get('/:id', async (req, res) => {
  const tweet = await TweetService.find(req.params.id)
  res.render('data', { data: tweet })
})

router.post('/', async (req, res) => {
  const tweet = await TweetService.add(req.body)
  res.send(tweet)
})

router.delete('/:id', async (req, res) => {
  const tweet = await TweetService.del(req.params.id)
  res.send(tweet)
})

module.exports = router
