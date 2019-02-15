const express = require("express");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const passport = require("passport");
const GooglesStrategy = require("passport-google-oauth20").Strategy;

// console.developers.google.com
// clientID 202709015824-6hvrvmbj9jg44lhs9m1ao8n63qo5njg4.apps.googleusercontent.com
// clientSecret 6hzjX8uvYDDk73e6MQl5i0Zu
passport.use(new GoogleStrategy());
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Welcome to Ladybird");
});

app.listen(PORT, () => {
    console.log(`Express server is listening on port ${PORT}`);
});
