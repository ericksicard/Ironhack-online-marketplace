import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'            // Body parsing middleware to handle the complexities of parsing streamable request objects
import cookieParser from 'cookie-parser'        // Cookie parsing middleware to parse and set cookies in request objects
import compress from 'compression'              // Compression middleware that will attempt to compress response bodies for all requests that traverse through the middleware
import cors from 'cors'                         // Middleware to enable CORS (Cross-origin resource sharing)
import helmet from 'helmet'                     // collection of middleware functions to help secure Express apps by setting various HTTP headers

import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

//comment it out when building the application code for production
import devBundle from './devBundle' 

//Serving static files from the dist folder
const CURRENT_WORKING_DIR = process.cwd()

const app = express();

//comment it out when building the application code for production
devBundle.compile(app)              

// Middlewares
app.use(bodyParser.json())      // parse body params and attache them to req.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())       // secure apps by setting various HTTP headers
app.use(cors())     // enable CORS - Cross Origin Resource Sharing

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)

//Rendering templates at the root
app.get('/', (req, res) => {
    res.status(200).send(Template())
})

// Catch unauthorised errors
app.use( (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ": " + err.message})
    }
})

export default app;