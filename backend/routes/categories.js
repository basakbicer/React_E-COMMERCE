const express = require("express");
const router = express.Router();

//Tüm kategori getirme
router.get("/", async (req, res)=> {
    res.send("kategoriler geldi");
})

module.exports = router;