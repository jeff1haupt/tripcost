const express = require('express')
const mongo = require('mongodb').MongoClient

const app = express()

app.post("/trip", (req, res) => {
    // Do something
})

app.get("/trips", (req, res) => {
    // Do something
})

app.post("/expense", (req, res) => {
    // Do something
})

app.get("/expenses", (req, res) => {
    // Do something 
})

app.listen(3000, () => console.log("Server is running"))