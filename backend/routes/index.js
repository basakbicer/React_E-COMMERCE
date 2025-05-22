const express = require("express");
const router = express.Router();

//diğer rota doyalarını içe akratıyoruz

const productRoute = require("/.product.js");
const categoryRoute = require("/.categories.js");

//her rotayı ilgili yol altında kullanıyoruz

router.use("/categories", categoryRoute);
router.use("/products", productRoute);

module.exports = router;