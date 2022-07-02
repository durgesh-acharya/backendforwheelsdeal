const express = require('express');
const router = express.Router();

const db = require('../db');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

//fetch all channel partner

router.get('/cp', function(req, res, next) {

    const sql = "SELECT * FROM cp";
    db.query(sql, function(err, rows, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      res.setHeader('Content-Type', 'application/json');
      res.json([{status : true, data : rows, msg : "cp retrived successfully!"}])
    })
  });

  //fetch channel partner by id

  router.get('/cp/byid/:id', function(req, res, next) {
    const id = req.params.id;
    
    const sql = `SELECT * FROM cp WHERE associateid = ${id}`;
    db.query(sql, function(err, row, fields) {
      if (err) {
        res.status(500).send({ error: 'Something failed!' })
      }
      if(row.length > 0){
        res.setHeader('Content-Type', 'application/json');
        res.json([{status : true, data : row[0], msg : "cp retrived successfully!"}])
      }else{
        res.json([{status : false, msg : "No cp Found!"}])
      }
     
    })
    });
    




  module.exports = router;