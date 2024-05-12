
const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// GET request handler for /register
app.get("/register", (req, res) => {
    let { user, password } = req.query;
    res.send(`Standard GET response. Welcome ${user}`);
});

// POST request handler for /register
app.post("/register", (req, res) => {
    let { user, password } = req.body;
    res.send("Standard POST response.");
});

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});