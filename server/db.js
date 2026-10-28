/* membaca konfigurasi dari file .env */
require("dotenv").config();

//mengirim pool dari package pg.
//pool mengelola kumpulan koneksi ke postgreSQL
const { Pool } = require("pg");

//membuat pool koneksi menggunakan konfigurasi .env
const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

//mengekspor pool agar bisa digunakan file lain.
module.exports = pool;