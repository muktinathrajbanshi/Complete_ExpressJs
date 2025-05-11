import express from "express";
import { PORT } from "./env.js";
import path from "path";
// import { fileURLToPath } from "url";


const app = express();
// absolute path
const staticPath = path.join(import.meta.dirname, "public");

app.use( express.static(staticPath));

app.use(express.urlencoded({ extended: true}));

// app.get("/contact", (req, res) => {
//     console.log(req.query);
//     res.redirect("/");
// });

app.post("/contact", (req,res) => {
    console.log(req.body);
    res.redirect("/");
})

app.listen(PORT, () => {
    console.log("Server is running on port 3000");
});