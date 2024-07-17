const express = require("express");

const router = express.Router();

const { browse } = require(`../../../controllers/RandoActions`);

router.get("/", browse);

module.exports = router;
