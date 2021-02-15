module.exports = class Tweet{
    constructor(content, user){
        this.content = content
        this.user = user
        this.usersLiked = []
        this.retweetedUsers = []
        console.log( user.name + " sent a tweet.")
        console.log("************")
    }
}