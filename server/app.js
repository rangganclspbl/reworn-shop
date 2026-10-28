//Mengimpor Express yang tadi kita install.
const express = require("express");
//mengimpor pool koneksi postgres
const pool = require("./db");
//mengimpor route untuk fitur auth
const authRoutes = require("./routes/authRoutes");
//Membuat aplikasi Express.
const app = express();

// Menentukan port tempat server menerima koneksi.
// Port 3000 adalah pilihan kita untuk server backend lokal.
const PORT = 3000;
app.use(express.json());
app.use("/api/auth", authRoutes);

// Membuat route untuk HTTP GET ke alamat "/".
app.get("/api/db-test", async (req, res) => {
  try {
    //menjalankan query sederhana untuk meminta waktu dari postgres
    const result = await pool.query("SELECT NOW()");

    //mengirim hasil query sebagai respons JSON.
    res.json({
      message: "Database connected succsessfully",
      //time: result.rows[0].now = mengisi properti time dengan waktu yang dikembalikan PostgreSQL.
      time: result.rows[0].now,
    })
  } catch (error) {
    //mencatat detail error di terminal backend.
    console.error("Database connection failed:", error.message);

    //mengirim respons error ke client
    res.status(500).json({
      message: "Database connection failed",
    });
  }
});



// Menjalankan server agar mulai menerima koneksi pada port 3000.
app.listen(PORT, () => {
  // Menampilkan pesan di terminal setelah server berhasil mulai mendengarkan.
  console.log(`Server auto-watch is running on http://localhost:${PORT}`);
});