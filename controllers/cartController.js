const Product = require("../models/Product");
const Cart = require("../models/Cart");

const { STATUS_CODE } = require("../constants/statusCode");

exports.getProductsCount = async () => {
  return await Cart.getProductsQuantity();
};

exports.addProductToCart = async (request, response) => {
  const { name } = request.body;
  await Cart.add(name);
  response.sendStatus(STATUS_CODE.OK);
};

exports.getCartView = async (request, response) => {
  const items = await Cart.getItems();
  response.render("cart.ejs", { items });
};
