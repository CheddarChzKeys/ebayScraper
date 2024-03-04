const express = require("express");
const app = express();
const PORT = 8080;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send({ message: "Hello There!" });
});

/*
get request example:
http://www.ebayscraper.net/itemSearch?string=kobe%20bryant&size=100&duration=30/
*/

app.get("/itemSearch", (req, res) => {
  const searchCriteria = {
    search: req.query.string,
    size: req.query.size,
    duration: req.query.duration,
  };

  // console.log(searchCriteria);
  //ebaySearchFunction(searchCriteria);
  res.send(searchCriteria);
});

app.get("/singleSearch/:string", (req, res) => {
  console.log(req.params.string);
  res.json(req.params.string);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
