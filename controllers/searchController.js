const search = (req, res) => {
  const searchCriteria = {
    search: req.query.string,
    size: req.query.size,
    duration: req.query.duration,
  };

  //ebaySearchFunction(searchCriteria);
  res.send(searchCriteria);
};
module.exports = {
  search: search,
};
