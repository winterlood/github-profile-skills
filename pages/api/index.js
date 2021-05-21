import fs from "fs";
import path from "path";
const app = require("express")();
const { v4 } = require("uuid");

app.get("/api", (req, res) => {
    const filePath = path.resolve(".", "public/svg/react_icon.svg");
    const svgBuffer = fs.readFileSync(filePath);
    res.setHeader("Content-Type", "svg");
    res.send(svgBuffer);
});

module.exports = app;
