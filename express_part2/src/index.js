import express from "express";
import path from "path";
const app = express();
const port = 3000;

// built in middleware

app.use(express.static(path))

app.get("/", (req, res) => {
    res.send("hello how are you for the express server");
});

app.listen(port, () => {
    console.log(`listening the port at ${port}`);
})

