const express = require("express");
const Subscriber = require("../models/Subscriber");

const router = express.Router();

router.post("/", async (req, res) => {
  const sub = new Subscriber(req.body);
  await sub.save();
  res.json(sub);
});

router.get("/", async (req, res) => {
  res.json(await Subscriber.find());
});

module.exports = router;
