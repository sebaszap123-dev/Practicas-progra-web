let express = require("express");
let router = express.Router(); 

router.use("/", function (req, res, next) {
  console.log("Request Url:" + req.url);
  next();
});
router.get("/", function (req, res) {
  res.send(
    `<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head>
          <body><h1>Hello world</h1></body></html>`
  );
});
// mandamos el index para que sea la ruta main
router.get("/main", (req, res) => {
  res.render("index");
});

module.exports = router;
