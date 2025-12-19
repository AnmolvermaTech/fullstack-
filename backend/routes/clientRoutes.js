const express = require("express");
const Client = require("../models/Client");

const router = express.Router();

router.post("/", async (req, res) => {
  const client = new Client(req.body);
  await client.save();
  res.json(client);
});

router.get("/", async (req, res) => {
  res.json(await Client.find());
});

module.exports = router;
