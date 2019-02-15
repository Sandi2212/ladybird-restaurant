const passport = require("passport");
const express = require("express");
const routes = express.Router();

routes.get("/google", passport.authenticate("google"));

routes.get(
    "/google",
    passport.authenticate("google", {
        scope: ["profile", "email"]
    })
);

module.exports = routes;
