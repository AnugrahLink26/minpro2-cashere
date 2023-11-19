const adminRouter = require("./adminRouter");
const userRouter = require("./userRouter");
const categoriesRouter = require("./categoriesRouter");
const productRouter = require("./productRouter");
const transactionRouter = require("./transactionRouter")

module.exports = {
  userRouter,
  adminRouter,
  categoriesRouter,
  productRouter,
  transactionRouter
};
