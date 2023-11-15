const express = require("express");
const PORT = 2000;
const db = require("./models");
const cors = require("cors");
const {
  userRouter,
  adminRouter,
  categoriesRouter,
  addProductRouter,
} = require("./routers");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('uploads'))

app.use("/api", (req, res) => {
  res.send("This is Cashere API");
});

app.use("/users", userRouter);
app.use("/admins", adminRouter);
app.use("/categories", categoriesRouter);
app.use("/products", addProductRouter);

app.listen(PORT, () => {
//   db.sequelize.sync({ alter: true })
  console.log(`Server running on port: ${PORT}`);
});
