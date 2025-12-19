const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  const contact = new Contact(req.body);
  await contact.save();
  res.json(contact);
});

router.get("/", async (req, res) => {
  res.json(await Contact.find());
});

module.exports = router;
