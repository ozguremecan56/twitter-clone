const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    pw: String,
    nick: String,
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel

// module.exports = class User{
//     constructor(name,pw,nick){
//         this.name = name
//         this.pw = pw
//         this.nick = nick
//         this.tweets = []
//         this.likedTweets = []
//         this.reTweets = []
//         console.log("User " + name + " is created.")
//     }

//     sendTweet(tweet){
//         this.tweets.push(new Tweet(tweet, this))
//         console.log("*****************")
//         console.log("tweet sent")
//         console.log("*****************")
//     }

//     likeTweet(tweet){
//         this.likedTweets.push(tweet)
//         tweet.usersLiked.push(this)
//         console.log("tweet liked")
//         console.log("*****************")
//     }

//     retweet(tweet){
//         this.reTweets.push(tweet)
//         tweet.retweetedUsers.push(this)
//         console.log("retweeted")
//         console.log("*****************")

//     }

// }