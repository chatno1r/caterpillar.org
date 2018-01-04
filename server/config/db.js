
var mysql = require('mysql');

var pool = mysql.createPool({
   connectionLimit: 10,
   host: 'localhost',
   user: 'GG',
   password: 'gg',
   database: 'Caterpillars'
});
exports.pool = pool;

exports.empty = function(procName, args) {
   return callProcedure(procName, args)
   .then(function() {} );
}

exports.row = function(procName, args) {
   return callProcedure(procName, args)
       .then(function(resultsets) {
           return resultsets[0][0];
       });
}

exports.rows = function(procName, args) {
   return callProcedure(procName, args)
       .then(function(resultsets) {
           return resultsets[0];
       });
}

function callProcedure(procName, args) {
   if (!args) {
       args = [];
   }
   var argString = '';
   for (var i = 0; i < args.length; i++) {
       if (i === args.length - 1) {
           argString += '?';
       } else {
           argString += '?,';
       }
   }
   return new Promise(function(resolve, reject) {
       pool.getConnection(function(err, connection) {
           if (err) {
               reject(err);
           } else {
               connection.query('CALL ' + procName + '(' + argString + ');', args, function(err, resultsets) {
                   connection.release();
                   if (err) {
                       reject(err);
                   } else {
                       resolve(resultsets);
                   }
               });
           }
       });
   });
}