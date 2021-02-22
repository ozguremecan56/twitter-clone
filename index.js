const Tweet = require('./models/tweet')
const User = require('./models/user')

const bodyParser = require('body-parser')

const express = require('express')
const cors = require('cors')

require('./mongo-connection')
const app = express()

app.use(bodyParser.json())
app.use(cors())

const userRouter = require('./routes/user')
const tweetRouter = require('./routes/tweet')

app.use('/user', userRouter)
app.use('/tweet', tweetRouter)

app.listen(3000, ()=>{
    console.log("server listening")
})



app.set('view engine', 'pug')
app.get('/', (req, res)=>{
    // res.sendFile(__dirname + '/index.html')
    // res.render()
    res.render('index')
})

