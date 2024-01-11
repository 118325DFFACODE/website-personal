const express = require('express');
const qr = require('qr-image');

const app = express();
const port = 3000;

// Handler untuk menghasilkan QR code
app.get('/qrcode', (req, res) => {
  const url = 'http://localhost:3000:' + constport3000; // Ganti dengan URL yang sesuai
  const qr_png = qr.image(url, { type: 'png' });
  res.type('png');
  qr_png.pipe(res);
});

// Server mendengarkan di port tertentu
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});