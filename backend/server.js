const express = require("express");
const cors = require("cors");
require("./db");

const projectRoutes = require("./routes/projectRoutes");
const clientRoutes = require("./routes/clientRoutes");
const contactRoutes = require("./routes/contactRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
