const express = require("express");
const router = express.Router();

/* GET posts index /posts */
router.get("/", (req, res, next) => {
  res.send("INDEX /posts");
});

/* GET posts new /posts/new */
router.get("/new", (req, res, next) => {
  res.send("NEW /posts/new");
});

/* GET posts edit/posts/:id/edit */
router.get("/:id/edit", (req, res, next) => {
  res.send("EDIT /posts/:id/edit");
});

/* GET post show /posts/:id */
router.get("/:id", (req, res, next) => {
  res.send("SHOW /posts/:id");
});

/* POST post create /posts/ */
router.post("/", (req, res, next) => {
  res.send("CREATE /posts");
});

/* PUT post update /posts/:id */
router.put("/:id", (req, res, next) => {
  res.send("UPDATE /posts/:id");
});

/* DELETE post delete /posts/:id */
router.delete("/:id", (req, res, next) => {
  res.send("DELETE /posts/:id");
});

module.exports = router;
