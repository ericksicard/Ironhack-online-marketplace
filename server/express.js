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
import shopRoutes from './routes/shop.routes'
import productRoutes from './routes/product.routes'
import orderRoutes from './routes/order.routes'


//****** Modules for server-side rendering ******

//React modules: Required to render the React components and use renderToString
import React from 'react'
import ReactDOMServer from 'react-dom/server';

/* Router modules: The StaticRouter is a stateless router that takes the requested
URL to match the frontend route and the MainRouter component, which is the
root component in our frontend: */
import { StaticRouter } from "react-router-dom";
import MainRouter from '../client/MainRouter';

/* Material-UI modules: The following modules will help generate the CSS styles
for the frontend components based on the Material-UI theme used on the
frontend */
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { indigo, pink, red, teal } from '@material-ui/core/colors';

//****** end ******

//comment it out when building the application code for production!!!!!
//import devBundle from './devBundle' 

//Serving static files from the dist folder
const CURRENT_WORKING_DIR = process.cwd()

const app = express();

//comment it out when building the application code for production!!!!!
//devBundle.compile(app)              

// Middlewares
app.use(bodyParser.json())      // parse body params and attache them to req.body
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())       // secure apps by setting various HTTP headers
app.use(cors())     // enable CORS - Cross Origin Resource Sharing

//Serving static files with Express
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', shopRoutes)
app.use('/', productRoutes)
app.use('/', orderRoutes)


//Basic Server-Side Rendering(SSR)
app.get('*', (req, res) => {
    
    //Preparing Material-UI styles for SSR
    /*In order to inject the Material-UI styles, on every request we first generate a new
    ServerStyleSheets and MUI theme instance, matching what is used in the frontend code.*/
    const sheets = new ServerStyleSheets();
    const generateClassName = createGenerateClassName()
    
    const theme = createMuiTheme({
        palette: {
            primary: {
                light: '#757de8',
                main: '#3f51b5',
                dark: '#002984',
                contrastText: '#fff',
            },
            secondary: {
                light: '#ff79b0',
                main: '#f44336',
                dark: '#c60055',
                contrastText: '#000',
            },
            openTitle: indigo['400'],
            protectedTitle: red['900'],
            type: 'light'
        }
    });

    //Generating markup
    /*The purpose of using renderToString is to generate an HTML string version of the React
    component that is to be shown to the user in response to the requested URL*/
    const context = {};
    const markup = ReactDOMServer.renderToString(
        sheets.collect(
            <StaticRouter location={req.url} context={context} >
                <StylesProvider generateClassName={generateClassName} >
                    <ThemeProvider theme={theme} >
                        <MainRouter />
                    </ThemeProvider>
                </StylesProvider>
            </StaticRouter>
        )
    )

    //Sending a template with markup and CSS
    /*Once the markup is generated, we first check if there was a redirect rendered in the
    component to be sent in the markup. If there was no redirect, then we generate the CSS
    string from the sheetsRegistry , and in the response send the template back with the
    markup and CSS injected.*/
    if (context.url) {
        return res.redirect(303, context.url)
    }
    const css = sheets.toString()

    res.status(200).send(Template({
      markup: markup,
      css: css
    }))
})


// Catch unauthorised errors
app.use( (err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        res.status(401).json({"error" : err.name + ": " + err.message})
    }
})

export default app;