const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
const Person = require("../models/person");
console.log(process.env.TESTING);
require("../database/mongoose");

router.get("/persons", function (req, res, next) {
  Person.find(function (err, persons) {
    if (err) return next(err);
    res.json(persons);
  });
});

router.post("/persons", async (req, res, next) => {
  const { fname, lname } = req.body;
  const newPerson = new Person({ firstName: fname, lastName: lname });
  console.log(newPerson);
  await newPerson.save();
  res.send(`First name es: ${fname} Last name es: ${lname}`);
  console.log(req.body);
});

module.exports = router;
