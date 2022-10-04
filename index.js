// import the dependancy express
const express = require('express')
// import express into the server file - entry point of our project
// this means we are using express as our server
const app = express()

app.listen(3000, () => console.log('Listening on port 3000 ... server complete'))
