const express = require("express");

const router = express.Router();
const authRouter = require("./auth/router");
const vosRandosRouter = require("./vosRandos/router");
// const vosRandosRouter = require("./vosRandos/");

/* ************************************************************************* */
// Import And Use Routers Here
/* **********A*************************************************************** */
router.use("/auth", authRouter);
router.use("/vosRandos", vosRandosRouter);

/* ************************************************************************* */

module.exports = router;
