const URL = require("../models/url");
const shortid = require("shortid");


async function addRoute(req, res) {
  
  const body = req.body;
  if (!body.url) return res.status(400).json({ msg: "incomplete information" });

  const SHORTID = shortid();
  await URL.create({
    shortID: SHORTID,
    redirectURL: body.url,
    totalClicks : 0,
    visitedHistory : []
  });
  return res.status(200).json({
    msg : "new shortID created",
    shortID : SHORTID
  });
  
}

async function shortCode(req, res) {
  try {
    const { shortcode } = req.params;

    const urlEntry = await URL.findOne({ shortID: shortcode });

    if (!urlEntry) {
      return res.status(404).json({ message: "URL not found" });
    }
    urlEntry.totalClicks = (urlEntry.totalClicks || 0) + 1;

    urlEntry.visitedHistory.push({ timestamp: Date.now() });

    await urlEntry.save();

    return res.redirect(urlEntry.redirectURL);
  } catch (error) {
    console.error("Error in redirect:", error);
    res.status(500).json({ message: "Server error" });
  }
}

async function allURLs(req,res) {
  const allURLs = await URL.find({});

  if (!allURLs) return res.status(404).json({ msg: "no user in database" });

  return res.status(200).json(allURLs);
}


module.exports = {
  addRoute, shortCode, allURLs
};
