// MIDDLEWARE to validate million dollar idea
const checkMillionDollarIdea = (req, res, next) => {
  const totalValue = req.query.numWeeks * req.query.weeklyRevenue;
  if (totalValue < 1000000) res.status(400).send("Not a million dollar idea.");
  next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
