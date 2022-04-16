const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const test = require("./Router/test");
const login = require("./Router/login");
const post = require("./Router/post");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use("/hi", test);
app.use("/login", login);
app.use("/post", post);

const port = 5000;
app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});