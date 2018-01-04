var db = require("../config/db");

exports.read = function(id) {
    return db.row("GetCaterpillar", [id]);
}

exports.all = function() {
    return db.rows("GetCaterpillars");
}