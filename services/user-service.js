const UserModel = require('../models/user')
const BaseService = require('./base-services')

class UserService extends BaseService{
    constructor(){
        super(UserModel)
    }
}

module.exports = new UserService()