require('dotenv').config();
import config from './../config/config'
import app from './express'

// Set up the database
require('../config/db.config');

//Listening on the specified port for incoming requests
app.listen(config.port, (err) => {
    if (err) console.log(err) 
    console.info('Server started on port %s.', config.port)
})


