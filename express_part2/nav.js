import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to my home page");
});

app.get("/about", (req, res) => {
    res.send("Welcome to my about page");
});

app.get("/contact", (req, res) => {
    res.send("Welcome to my contact page");
});

app.get("/services", (req, res) => {
    res.send("Welcome to my services page");
});

app.get("/blogs", (req, res) => {
    res.send("Welcome to my blogs page");
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})