const express = require('express')
const {addRoute, shortCode, allURLs} = require('../controllers/URLroutes')
const router = express.Router();

router.post("/shorten",addRoute)
router.get("/allURLs",allURLs)
router.get("/:shortcode",shortCode)

module.exports = router;