const Tweet = require('./models/tweet')
const User = require('./models/user')

const express = require('express')
const app = express()

require('./mongo-connection')