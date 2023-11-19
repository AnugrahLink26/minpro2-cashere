const db = require("../models");
const Transaction = db.Transactions;
const TransactionDetail = db.TransactionDetails;
const Product = db.Products

module.exports = {
    newTransaction: async (req, res) => {
        try {
            const { totalPrice, payment, change } = req.body
            const id = await Transaction.count() + 1
            const result = await Transaction.create({ 
                id,
                totalPrice,
                payment,
                change
            })
            res.status(200).send(result)
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: error.message })
        }
    },
    sendOrderDetail: async (req, res) => {
        try {
            // const { cartItems } = req.body
            const { cartItems } = req.body
            const TransactionId = await Transaction.count()

            for (const item of cartItems) {
                const { id, quantity } = item
                const product = await Product.findOne({
                    where: { id }
                })

                const subTotal = product.productPrice * quantity

                if (product.productStock < quantity) {
                    return res.status(400).send({ message: `Insufficient stock` })
                }
                const updateStock = product.productStock - quantity
                await TransactionDetail.create({
                    TransactionId,
                    ProductId: id,
                    quantity,
                    subTotal
                })
                await Product.update(
                    { productStock: updateStock },
                    { where: { id } }
                )
            }
            // for (const item of cartItems) {
            // }
            res.status(200).send("Transaction detail successfully send")
        } catch (error) {
            console.log(error);
            res.status(400).send({ message: error.message })
        }
    }
}