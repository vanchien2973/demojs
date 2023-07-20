var express = require('express')
var router = express.Router()

router.get('/greenwich', (req, res) => {
    var gw = "Greenwich"
    var address = "No.2 Pham Van Bach - Cau Giay - Ha Noi"
    var image = "https://greenwich.edu.vn/wp-content/uploads/2022/10/Welcome-1.jpg"
    res.render('greenwich', {gw : gw, address : address, image: image})
})

module.exports = router