const TweetModel = require('../models/tweet')
const BaseService = require('./base-services')

class TweetService extends BaseService{
    constructor(){
        super(TweetModel)
    }
}

module.exports = new TweetService()