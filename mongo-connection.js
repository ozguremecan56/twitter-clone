const mongoose = require ('mongoose')

async function main(){
    await mongoose.connect('mongodb://localhost/twitdb', {useUnifiedTopology: true, useNewUrlParser: true})
    console.log("connected")
}

main()

