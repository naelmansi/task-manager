const mongodb = require ('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

//useUnifiedTopology: tru

MongoClient.connect(connectionURL,{useNewUrlParser: true, useUnifiedTopology: true},(error, client)=>{
    if (error){
        return console.log ('error in opening connection to Mongo')
    }
    console.log ('Connected Successfuly to mongo !')
    // console.log ('Working')
    const db = client.db(databaseName)
    db.collection('user').insertOne({
    name : 'Nael',
    age : 42
})
})

