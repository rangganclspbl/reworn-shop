//mengimpor Express, framework backend yang kita gunakan
const express = require("express");

//membuat router untuk mengatur alamat API khusus fitur authentication
//router membantu kita memisahkan route auth dari route fitur lain
const router = express.Router();
//mengimpor fungsi registerUser dari controller
const { registerUser, loginUser } = require("../controllers/authController");

//menentukan bahwa request post ke alamat /register
//dan akan menjalankan fungsi registerUser
router.post("/register", registerUser);
router.post("/login", loginUser)

//export router 
module.exports = router;