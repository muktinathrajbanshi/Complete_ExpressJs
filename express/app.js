import express from "express";
import { PORT } from "./env.js";
import path from "path";
// import { fileURLToPath } from "url";


const app = express();


// console.log(import.meta.dirname);
// console.log(import.meta.filename);



// absolute path
const staticPath = path.join(import.meta.dirname, "public");

app.use("/public", express.static(staticPath));

app.get("/product", (req, res) => {
    console.log(req.query);
    res.send(`<h1> user search for Product ${req.query.page} ${req.query.limit} mobile </h1>`);
});

app.get("/profile/:username", (req, res) => {
    
console.log(req.params);
res.send(`<h1> My username is ${req.params.username} </h1>`);

});

app.get("/profile/:username/article/:slug", (req, res) => {
console.log(req.params);
const formatedSlug = req.params.slug.replace(/-/g, " ");
res.send(`<h1> Article ${req.params.username} by ${formatedSlug} </h1>`);

});

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});