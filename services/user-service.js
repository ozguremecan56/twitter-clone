const UserModel = require('../models/user')
const BaseService = require('./base-service')

class UserService extends BaseService{
    constructor(){
        super(UserModel)
    }
}