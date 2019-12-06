//Work Order System
//Code by John Bailey
//Version 1.0
//Last Update 12/5/19

const  workorderRoutes = require('./workorder_routes');

module.exports = function(app, db) {
    workorderRoutes(app,db);
}