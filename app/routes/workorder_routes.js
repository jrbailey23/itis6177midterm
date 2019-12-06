//Work Order System
//Code by John Bailey
//Version 1.0
//Last Update 12/5/19

var ObjectID = require('mongodb').ObjectID

module.exports = function(app, db) {

    //Get existing work order by ID
    app.get('/workorders/:id', (req, res) => {
        const id = req.params.id;
        const eWorkOrder = {'_id': new ObjectID(id)};
        db.collection('workorders').findOne(eWorkOrder, (err, item) => {
        if (err) {
                res.send({ 'error': 'An error has occured'});
            } else {
                res.send(item);
            }
        });
    });


    //Delete existing work order by ID
    app.delete('/workorders/:id', (req, res) => {
        const id = req.params.id;
        const eWorkOrder = {'_id': new ObjectID(id)};
        db.collection('workorders').remove(eWorkOrder, (err, item) => {
        if (err) {
                res.send({ 'error': 'An error has occured'});
            } else {
                res.send('Work Order ' + id + ' has been deleted');
            }
        });
    });


     //Update an existing work order
     app.put('/workorders/:id', (req, res) => {
        const id = req.params.id;
        const eWorkOrder = {'_id': new ObjectID(id)};
        const workorder = { text: req.body.workOrderID, text: req.body.description, text: req.body.zone, text: req.body.status};
        db.collection('workorders').update(eWorkOrder, workorder, (err, item) => {
        if (err) {
                res.send({ 'error': 'An error has occured'});
            } else {
                res.send('Work Order ' + id + ' has been updated');
            }
        });
    });


    //Create a new work order by posting to work order database
    app.post('/workorders', (req, res) => {
        // Create new work order
        console.log(req.body)
        res.send('New Work Order')

        const workorder = { text: req.body.workOrderID, text: req.body.description, text: req.body.zone, text: req.body.status};
        db.collection('workorders').insert(workorder, (err, results) => {
            if (err) {
                res.send({ 'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
            }
        });
    });
};