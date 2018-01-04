var express = require('express');

var caterpillars = require('./controllers/caterpillars.ctrl');
var families = require('./controllers/families.ctrl');
var laNoc = require("./controllers/families.la.noc.ctrl");
var crLim = require("./controllers/families.cr.lim.ctrl")

var router = express.Router();

router.use('/caterpillars', caterpillars);
router.use('/families', families);
router.use("/families/noc", laNoc)
router.use("/families/lim", crLim)

module.exports = router;