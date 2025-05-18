const express = require("express");
const app = express();
const port = process.env.PORT || 8000 ;


app.get("/", (req, res) => {
    res.send("Welcome to muktinath page")
})

app.get("/about", (req, res) => {
    res.send("Welcome to about page")
})

app.get("/weather", (req, res) => {
    res.send("Welcome to weather page")
})

app.use((req, res) => {
    res.status(404).send("404 error page oops")
})

app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})