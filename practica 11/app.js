var express = require("express");
var app = express();

var port = process.env.PORT || 3000;
// aquí se settea el puerto para escuchar el servidor

// definiremos la primera ruta del servidor la raíz
app.get("/", function (req, res) {
  res.send("<html><head><body><h1>Hello world!</h1></body></head></html>");
});

app.listen(port); // levantamiento del servidor

// segunda ruta del servidor
app.get("/api", function (req, res) {
  res.json({
    firstName: "Sebastián",
    lastName: "Frausto",
  });
});

// se mostro una pagina con el json que dice JSON, DATOS SIN PROCESAR Y ENCABEZADOS
// También tiene opciones de guardado, copiador, contracción y expanción de los datos
// me lo muestra en formato raw

/* Agregar tercer ruta, recibir un parametro */

/* probaré hacer variables para el html */
var html = {
  first: "<html><head></head><body><h1>Person: ",
  second: "</h1></body></html>",
};
app.get("/person/:id", function (req, res) {
  res.send(html.first + req.params.id + html.second);
});

/* Efectivamente se muestra person y el nombre o caracter que se escriba despues de 'person/'*/
/* por ultimo tratare de hacer la concatenación con una función */
// No logre haceer una función dentro del json
