let express = require("express");
let router = express.Router();

router.get("/person", function (req, res) {
  res.send("has solicitado el listado de personas");
});
// Modifique la ruta raíz para recibir un style del archivo style.css de la carpeta public

// var html = {
//   first: "<html><head></head><body><h1>Person: ",
//   second: "</h1></body></html>",
// };

// Ya la tenia desde la practica 10 esta ruta
// cambio, adicción de QRST para recibir el query
// router.get("/person/:id", function (req, res) {
//   res.render("person", {
//     ID: req.params.id,
//     SMS: req.query.message,
//     TIME: req.query.time,
//   });
// });

// router.get("/api", function (req, res) {
//   res.json({
//     firstName: "Sebastián",
//     lastName: "Frausto",
//   });
// });

// router.get("/student", function (req, res) {
//   res.render("index");
// });

// router.post("/student", function (req, res) {
//   res.send(`First name es: ${req.body.fname} Last name es: ${req.body.lname}`);
//   console.log(req.body);
// });

module.exports = router;
