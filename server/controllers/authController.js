//mengambil koneksi database postgres dari db.js
const pool = require("../db");
//mengambil bcrypt untuk melakukan hashing password
const bcrypt = require("bcrypt");
const normalizedEmail = require("../utils/normalizedEmail");

//fungsi untuk register user
async function registerUser(req, res) {
  try {
    //get data from frontend melalui req body
    const {name, email, password} = req.body;

    //make sure all input must be fill
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Name, email, password are required",
      });
    }

    if (typeof name !== "string" || typeof email !== "string" || typeof password !== "string") {
      return res.status(400).json({
        message: "Invalid input types."
      })
    }

    //make sure name and email not only contain spacing
    if (!name.trim() || !email.trim()) {
      return res.status(400).json({
        message: "Name and email cannot be empty",
      });
    }

    //normalized email in order to konsisten saat di simpan dan dicari
    const emailNormalized = normalizedEmail(email);
    //validation base email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailNormalized)) {
      return res.status(400).json({
        message: "Invalid email format",
      });
    }

    if (password.length < 8 || !password.trim()) {
      return res.status(400).json({
        message: "Password must be at least 8 characters",
      });
    }

    const existingUser = await pool.query(
      "SELECT id FROM users WHERE email = $1",
      [emailNormalized]
    );

    if (existingUser.rows.length > 0) {
      return res.status(409).json({
        message: "Email is already registered",
      });
    }

    const passwordHash = await bcrypt.hash(password, 12);

    //menyimpan user baru menggunakan parameterized query
    //RETURNING mengambil data user yang berhasil dibuat
    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email`,
      [name.trim(), emailNormalized, passwordHash]
    );

    //mengirim respons sukses tanpa mengirim password atau hash
    return res.status(201).json({
      message: "Registration successful",
      user: result.rows[0],
    });

  } catch (error) {
    console.error("Registration failed:", error.message);

    return res.status(500).json({
      message: "An unexpected error occurred",
    });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required"
      })
    }

    if (typeof email !== "string" || typeof password !== "string") {
      return res.status(400).json({
        message: "Invalid input types."
      })
    }
    
    const emailNormalized = normalizedEmail(email);
    const result = await pool.query(
      `SELECT id, name, email, password_hash FROM users WHERE email = $1`, [emailNormalized]
    )

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password",
      })
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid email or password",
      })
    }

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    })

  } catch (error) {
    console.error("Login failed:", error.message)
    return res.status(500).json({
      message: "Unexpected error occurred",
    })
  }
}

module.exports = { registerUser, loginUser };