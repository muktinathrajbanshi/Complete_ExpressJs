import express from "express";
import path from "path";
const app = express();
import { fileURLToPath } from 'url';

const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// built in middleware

const staticPath = path.join(__dirname, "../public");

app.use(express.static(staticPath));

app.get("/", (req, res) => {
    res.send("hello how are you for the express server");
});

app.listen(port, () => {
    console.log(`listening the port at ${port}`);
})

