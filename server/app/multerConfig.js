const express = require("express");
const multer = require("multer");
const { browse, randoByUser, add, edit } = require("./controllers/RandoAction");

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.get("/", browse);
router.get("/randoByUser", randoByUser);
router.post("/", upload.single("image"), add); // Utilisation du middleware pour l'upload
router.patch("/", edit);

module.exports = router;
