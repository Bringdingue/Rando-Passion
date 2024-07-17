const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const randoRouter = require("./rando/router");

router.use("/vosRando", randoRouter);

/* ************************************************************************* */

module.exports = router;
