import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/post", (req, res) => {
  res.render("newpost.ejs");
});
app.get("/forum", (req, res) => {
  res.render("forum.ejs");
});
app.get("/news", (req, res) => {
  res.render("news.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
