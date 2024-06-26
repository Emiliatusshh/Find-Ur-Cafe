require("dotenv").config();

const express = require("express");
const cors = require("cors");
const db = require("./utils/db");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/uploads", express.static("public/uploads"));

(async () => {
  const connection = await db;

  app.use((req, res, next) => {
    req.db = connection;
    next();
  });

  app.use("/api/users", require("./routes/user"));
  app.use("/api/cafes", require("./routes/cafe"));
  app.use("/api/ads", require("./routes/ads"));
  app.use("/api/reviews", require("./routes/reviews"));
})();

const port = process.env.PORT || 7002;

app.listen(port, () => console.log(`Server is running on port ${port}`));
