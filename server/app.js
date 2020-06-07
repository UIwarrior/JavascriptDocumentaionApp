const express = require("express");
//var csv = require("csvtojson");
const router = express.Router();
const AddExpenseModel = require('./Model/addexpense');
const mongoose = require('mongoose');
//const discoverData = require('./discover-usa-all.json');
//const excelToJson = require('convert-excel-to-json');


router.post('/storedocument', function(req, res) {
   
    const { title, subtitle, description, link } = req.body;
    try {
        const expenseObj = new AddExpenseModel({
            title,
            subtitle,
            description,
            link,
        })
        console.log(expenseObj);
        expenseObj.save();
        res.send({ status: 200, message: 'saved successfully' })
    } catch (e) {
        console.log(e);
        res.send({ status: 500, message: e.stack });
    }
    res.send('')
});


router.get('/getdocument', function(req, res) {
    console.log("received request", req);
    AddExpenseModel.find().then(documents => {
            console.log(documents);
            console.log('india expense');
            res.send(documents);
        })
        .catch(error => console.log(error))
})



router.get("/user", function(req, res) {
    var data = ({
        firstName: 'Arnab',
        lastName: 'Sadhya',
        username: 'AF000212',
        email: 'arnab.sadhya@gmail.com'
    });
    console.log(data);
    res.status(200).send(data);
});

module.exports = router;