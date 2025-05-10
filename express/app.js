import express from "express";
import { PORT } from "./env.js";
import path from "path";
import { fileURLToPath } from "url";


const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// absolute path
const staticPath = path.join(__dirname, "public");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
    // console.log(__dirname);
    // console.log(__filename);
    // console.log(import.meta.url);
    // const __filename = new URL(import.meta.url).pathname;
    // console.log(__filename);

    const homePagePath = path.join(__dirname, "public", "index.html");

    res.sendFile(homePagePath);

});

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});