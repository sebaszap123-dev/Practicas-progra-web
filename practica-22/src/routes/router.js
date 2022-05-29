const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();
const Person = require("../models/person");
console.log(process.env.TESTING);
require("../database/mongoose");

// remaked router and routes name

router.get("/student", (req, res) => {
  res.render("person");
});

router.get("/students", function (req, res, next) {
  Person.find(function (err, persons) {
    if (err) return next(err);
    res.render("student", { students: persons });
  });
});

// Agregamos la ruta /student pues la que va a contestar al post del formulario
router.post("/addStudent", async (req, res) => {
  // ! check body return
  const { name, lastName, age, typeBlood, nss } = req.body;
  var newStudent = new Person({
    nss: nss,
    firstName: name,
    lastName: lastName,
    age: age,
    typeBlood: typeBlood,
  });
  console.log("se mandó a la BD:" + newStudent);
  await newStudent.save();
  res.redirect("/main");
});

/* DELETE PERSON */
router.get("/deletePerson/:id", function (req, res, next) {
  console.log(req.params.id);
  Person.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.redirect("/students");
  });
});

router.get("/findById/:id", function (req, res, next) {
  console.log(req.params.id);
  Person.findById(req.params.id, function (err, person) {
    if (err) return next(err);
    // console.log(person);
    res.render("personUpdate", { person });
  });
});

router.post("/updatePerson/:id", function (req, res, next) {
  console.log(`${req.params.id} unu`);
  console.log(`${JSON.stringify(req.body)} unu`);
  // ! this is updating but duplicate for some reason the data
  // * implement req.params because req.body never return the id or objId
  Person.findByIdAndUpdate(
    req.params.id,
    {
      nss: req.body.nss,
      firstName: req.body.name,
      lastName: req.body.lastName,
      age: req.body.age,
      typeBlood: req.body.typeBlood,
    },
    function (err, post) {
      if (err) return next(err);
      res.redirect("/students");
    }
  );
});

module.exports = router;
