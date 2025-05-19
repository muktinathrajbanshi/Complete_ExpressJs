import express from "express";
import path from "path";
const app = express();
import { fileURLToPath } from 'url';
import hbs from "hbs";
import request from "request";

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// built in middleware

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");


// to set the view engine
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
    request(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&units=metric&appid=a609106e599dc0bd064bcbef1de49f82`
    )
    .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        console.log(`city name is ${arrData[0].name} and the temp is ${arrData[0].main.temp}`);

        res.write(arrData[0].name);
        // console.log(realTimeData);
    })
    .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
    });
});

// app.get("*", (req, res) => {
//     res.render("404", {
//         errorComment :" Oops page couldn't be found!",
//     });
// });

app.listen(port, () => {
    console.log(`listening the port at ${port}`);
})

