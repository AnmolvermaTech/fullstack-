const express = require("express");
const multer = require("multer");
const sharp = require("sharp");
const Project = require("../models/Project");
const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });
router.post("/", upload.single("image"), async (req, res) => {
  const filename = Date.now() + ".jpg";
  await sharp(req.file.buffer)
    .resize(450, 350)
    .toFile("uploads/" + filename);

  const project = new Project({
    name: req.body.name,
    description: req.body.description,
    image: filename
  });

  await project.save();
  res.json(project);
});

router.get("/", async (req, res) => {
  res.json(await Project.find());
});

module.exports = router;
