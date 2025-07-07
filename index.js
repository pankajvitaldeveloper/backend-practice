const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./connection/db");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();
connectDB();

app.use(express.json()); // for parsing JSON

app.use("/api/", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
