const express = require("express");
const app = express();
const PORT = 8080;

const searchRouter = require("./routes/searchRouter.js");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send({ message: "Hello There!" });
});

/*
get request example:
http://www.ebayscraper.net/itemSearch?string=kobe%20bryant&size=100
*/

app.use("/itemSearch", searchRouter);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
