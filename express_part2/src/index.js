import express from "express";
import path from "path";
const app = express();
import { fileURLToPath } from 'url';
import hbs from "hbs";

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// built in middleware

const staticPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../views");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


// to set the view engine
app.set("views", viewsPath);
app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.use(express.static(staticPath));

// template engine route
app.get("/", (req, res) => {
    res.render("index", {
    channelName : "rajbanshi",
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

// app.get("*", (req, res) => {
//     res.render("404", {
//         errorComment :" Oops page couldn't be found!",
//     });
// });

app.listen(port, () => {
    console.log(`listening the port at ${port}`);
})

