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
    res.write("<h1>Welcome to my contact page</h1>");
    res.write("<h1>Welcome to my contact page again</h1>");
    res.send();

});

app.get("/services", (req, res) => {
    res.send("Welcome to my services page");
});

app.get("/blogs", (req, res) => {
    res.send([
        {
        id:1,
        name: "muktinath",
        },
        {
        id:1,
        name: "muktinath",
        },
        {
        id:1,
        name: "muktinath",
        },

]);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
})