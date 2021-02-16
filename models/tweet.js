const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
    content:String,
    username:String
})

const TweetModel = mongoose.model('Tweet', TweetSchema)

module.exports = TweetModel

// module.exports = class Tweet{
//     constructor(content, user){
//         this.content = content
//         this.user = user
//         this.usersLiked = []
//         this.retweetedUsers = []
//         console.log( user.name + " sent a tweet.")
//         console.log("************")
//     }
// }