import express from 'express'
import devBundle from './devBundle'  //comment it out when building the application code for production
import path from 'path'
import template from './../template'
import { MongoClient } from 'mongodb'

const app = express()
devBundle.compile(app)               //comment it out when building the application code for production

//Serving static files from the dist folder
const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

//Rendering templates at the root
app.get('/', (req, res) => {
    res.status(200).send(template())
})

//Listening on the specified port for incoming requests
let port = process.env.PORT || 3000
app.listen(port, function onStart(err) {
    if (err) console.log(err) 
    console.info('Server started on port %s.', port)
})

//Connecting the server to MongoDB
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/ironhackOnlineMarketplace'
MongoClient.connect(url, (err, db) => {
    console.log("Connected successfully to mongodb server");
    db.close()
})


