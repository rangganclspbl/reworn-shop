//mengimpor Express, framework backend yang kita gunakan
const express = require("express");

//membuat router untuk mengatur alamat API khusus fitur authentication
//router membantu kita memisahkan route auth dari route fitur lain
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
// router.get("/middleware", authMiddleware, (req, res) => {
//     return res.status(200).json({
//         message: "Authenticated",
//         user: req.user,
//     })
// });

//mengimpor fungsi registerUser dari controller
const { registerUser, loginUser, getCurrentUser } = require("../controllers/authController");

//menentukan bahwa request post ke alamat /register
//dan akan menjalankan fungsi registerUser
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", authMiddleware ,getCurrentUser);

//export router 
module.exports = router;