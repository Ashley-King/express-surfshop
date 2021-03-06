const express = require("express");
const router = express.Router();
const { postRegister } = require("../controllers/index");
/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Surf Shop | Home" });
});

/* GET /register */
router.get("/register", (req, res, next) => {
  res.send("GET /register");
});

/* POST /register */
router.post("/register", postRegister);

/* GET /login */
router.get("/login", (req, res, next) => {
  res.send("GET /login");
});

/* POST /login */
router.post("/login", (req, res, next) => {
  res.send("POST /login");
});

/* GET /profile/:user_id */
router.get("/profile", (req, res, next) => {
  res.send("GET /profile");
});

/* PUT /profile */
router.put("/profile/:user_id", (req, res, next) => {
  res.send("GET /profile/:user_id");
});

/* GET /forgot-password */
router.get("/forgot-password", (req, res, next) => {
  res.send("GET /forgot-password");
});

/* PUT /forgot-password */
router.put("/forgot-password", (req, res, next) => {
  res.send("PUT /forgot-password");
});

/* GET /reset-password/:token*/
router.get("/reset-password/:token", (req, res, next) => {
  res.send("GET /reset-password");
});

/* PUT /reset-password/:token*/
router.put("/reset-password/:token", (req, res, next) => {
  res.send("PUT /reset-password/:token");
});

module.exports = router;
