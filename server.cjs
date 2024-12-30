const express = require('express')
const sqlite3 = require('sqlite3')
const cors = require('cors')

const app = express()
const db = new sqlite3.Database('database.db')

app.use(cors())
app.use(express.json())

// Create tables
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    stock INTEGER,
    description TEXT
  )`)

    db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT,
    total_amount REAL,
    status TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )`)
})

// Example API endpoints
app.get('/api/products', (req, res) => {
    db.all('SELECT * FROM products', (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message })
            return
        }
        res.json(rows)
    })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
}) 