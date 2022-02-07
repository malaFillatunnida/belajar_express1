var express = require("express");
var router = express.Router();

var connection = require("../library/database");

/* GET users listing. */
router.get("/", function (req, res, next) {
  //quary
  connection.query("SELECT * FROM users;", function (err, rows) {
    if (err) {
      req.flash("error", er);
      req.render("user", {
        data: "",
      });
    } else {
      //render ke view post index
      res.render("users", {
        data: rows,
      });
    }
  });
});

module.exports = router;
