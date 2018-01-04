var express = require('express');
var procedures = require('../procedures/caterpillars.proc');

var router = express.Router();

// Collection for all products
router.route('/')
    .get(function(req, res) {
        procedures.all().then(function(caterpillars) {
            res.send(caterpillars);
        }, function(err) {
            res.status(500).send(err);
        });
    });

module.exports = router;
