const express = require('express');
const path = require('path');
const app = express();

const dotenv = require('dotenv').config()
const logger = require('morgan')

// Router initialization
const TFTRouter = require('./Routes/TFTRouter')

// Helper function to make sure all of the static assets are available.
const { retrieveSetFile } = require('./Tools/FileWriter');

// retrieveSetFile()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger('dev'))

// Retrieve the static files to render web application through the server
const buildPath = path.join(__dirname, "..", "build")
app.use(express.static(buildPath))

// Connecting app to Routers
app.use('/tft', TFTRouter)

// Sending static files on every request
app.get('/*', (req, res) => res.sendFile(path.join(buildPath, "index.html")))

app.listen(3000)