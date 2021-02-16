const Tweet = require('./models/tweet')
const User = require('./models/user')

const express = require('express')
const app = express()

app.listen(3000, ()=>{
    console.log("server listening")
})

require('./mongo-connection')

app.set('view engine', 'pug')
app.get('/', (req, res)=>{
    // res.sendFile(__dirname + '/index.html')
    // res.render()
    res.render('index')
})