var express = require('express');
var procedures = require('../procedures/families.proc');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        procedures.all()
        .then(function(families) {
            res.send(families);
        }, function(err) {
            res.status(500).send(err);
        });
    });

module.exports = router;