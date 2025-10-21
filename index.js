const express = require('express');
const mysql = require('mysql2');
const app = express();
app.use(express.json());
const db = mysql.createConnection({
  host: 'host.docker.internal',  
  user: 'root',
  password: '1234',
  port:3307,
  database: 'classicmodels'
});
db.connect(err => {
  if (err) {
    console.error('MySQL connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});
app.get('/customers', (req, res) => {
  db.query('SELECT * FROM customers', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
