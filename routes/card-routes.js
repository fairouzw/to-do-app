var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const Card = require("../models/card-model");

//GET all cards
router.get("/cards", (req, res, next) => {
  Card.find()
    .then(allCards => {
      res.json(allCards);
    })
    .catch(err => {
      res.json(err);
    });
});


//POST card

router.post("/cards", (req, res, next) => {
  
  Project.create({
    title: req.body.title,
  })
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res.json(err);
  })
});

//POST item 



module.exports = router;