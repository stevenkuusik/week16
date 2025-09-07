const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

// Laeme JSON andmed
const cv = require("./data.json");

// Vaadete mootor & kataloog
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Statilised failid (CSS, pildid, JS)
app.use(express.static(path.join(__dirname, "public")));

// Avaleht – edastame kogu cv objekti EJS-ile
app.get("/", (req, res) => {
  res.render("index", { cv });
});

app.listen(port, () => {
  console.log(`Server töötab: http://localhost:${port}`);

app.use(express.static("public"));
});
