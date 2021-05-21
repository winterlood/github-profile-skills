// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var express = require("express");
var app = express();
app.get("/api/svg", function (req, res) {
    const svgPath = path.join(__dirname, "/assets", "react_icon.svg");
    res.sendFile(svgPath);
});

module.exports = app;
