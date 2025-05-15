import express from "express";
const app = express();


app.get("/", (req, res) => {
    res.send("Hello buddy");
});

app.get("/about", (req, res) => {
    res.send("Hello buddy how are you");
});


app.listen(3000, () => {
    console.log("listening the port at 3000");
})
// The callback function has 2 parameters, request(req) and response(res).
// The request object(req) represents the HTTP request and has properties for the request
// query string, parameters, body, HTTP headers, etc.
// Similarly, the response object represents the HTTP response that the Express app sends when it 
// receives an HTTP request.

