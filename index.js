const express = require("express");
const url = require("url");
const router = require("./router");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const schema = mongoose.Schema;
const model = mongoose.model;

const tempSchema = new schema({
    field: String,
});

const testModel = model("tester", tempSchema);

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb://localhost:27017/testbase", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(console.log("Connected!!"));

app.get("/", function (req, res) {
    var response = {
        success: true,
        error: false,
        message: "api called successfully!!!!"
    };
    res.send(response);
    console.log("someone accessed the api!!!!!!!!");
    console.log(response);
});

app.get("/test", function (req, res) {
    res.send("test successfull");
});

app.post("/postapi", function (req, res) {
    var email = req.body.email;
    var name = req.body.name;
    var response = {
        error: false,
        namesent: null,
        emailsent: null,
        something: "abcd"
    };
    if (!name || !email) {
        response.error = true;
    } else {
        response.error = false;
        response.namesent = name;
        response.emailsent = email;
        var test = new testModel({
            field: name
        });
        test.save((err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log('success!!');
            }
        });
    }
    res.send(response);
    console.log("api accessed!!");
    console.log(response);
    console.log(email);
    console.log(name);
});


app.listen(1010, function () {
    console.log("server running on port 1010!!");
});