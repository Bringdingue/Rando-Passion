const express = require("express");
const {
  browse,
  randoByUser,
  add,
  edit,
} = require("../../../controllers/RandoAction");

const router = express.Router();

router.get("/", browse);
router.get("/randoByUser", randoByUser);
router.post("/", add);
router.patch("/", edit);

module.exports = router;
