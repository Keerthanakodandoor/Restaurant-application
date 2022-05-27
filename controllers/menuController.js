const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Menu } = require('../models/menu');

// => localhost:3000/employees/
router.get('/', (req, res) => {
    Menu.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Menus :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Menu.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var men = new Menu({
        name: req.body.name,
        category:req.body.category,
        quantity:req.body.quantity,
        orderStatus:req.body.orderStatus,
        availableStatus:req.body.availableStatus,
        price:req.body.price
    });
    men.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Menu Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    var men = {
        name: req.body.name,
        category:req.body.category,
        quantity:req.body.quantity,
        orderStatus:req.body.orderStatus,
        availableStatus:req.body.availableStatus,
        price:req.body.price 
    };
    Menu.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Menu Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Menu.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Menu Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;