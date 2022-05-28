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

router.get("/person", function (req, res) {
  res.render("person");
});

router.post("/addPerson", async (req, res, next) => {
  // Aquí hacemos la petición del body parseado
  console.log(req.body);
  const newPerson = new Person({
    nss: req.body.nss,
    firstName: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    typeBlood: req.body.typeBlood,
  });
  console.log(newPerson);
  // Desde la practica 20 lo habia implementado pero en esta ocasión hablare más del como y porque ya lo habia implementado
  /* Esta practica trata de llevar acabo el guardado de datos en la base de datos, el método save esta proporcionado por mongoose
  Permitiendonos guardar los modelos de datos que creamos en dicha base de datos a la que previamente estamos conectados
  En mi caso las conexiones estan hechas mediante variables de entorno que no subiré a github pero mencionarlas que son
  MONGODB_URI y TESTING
  */
  await newPerson.save();
  res.redirect("/persons");
});

module.exports = router;
