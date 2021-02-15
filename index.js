const Tweet = require('./tweet')
const User = require('./user')

function test(){

    ozgur = new User("ozgure56", "1234", "patates56")
    kerem = new User("keremm", "1327", "kerembard")
    
    ozgur.sendTweet("im sending a tweet!")
    console.log(ozgur)
    
    kerem.likeTweet(ozgur.tweets[0])
    
    kerem.retweet(ozgur.tweets[0])
    console.log(kerem)
}

test()