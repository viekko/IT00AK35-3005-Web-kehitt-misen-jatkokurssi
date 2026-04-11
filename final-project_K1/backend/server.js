const express = require('express')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
app.use(cors())
app.use(express.json())

const pool = new Pool({
  host: process.env.DB_HOST || 'db',
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_NAME || 'postgres',
  port: 5432,
})

// POST - tallenna tilaus
app.post('/api/tilaukset', async (req, res) => {
  const { nimi, email, puhelin, tuote, maara, pvm } = req.body
  if (!nimi || !email || !puhelin || !tuote || !maara || !pvm) {
    return res.status(400).json({ error: 'Kaikki kentät ovat pakollisia' })
  }
  try {
    const result = await pool.query(
      'INSERT INTO tilaukset (nimi, email, puhelin, tuote, maara, pvm) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *',
      [nimi, email, puhelin, tuote, maara, pvm]
    )
    res.status(201).json({ success: true, tilaus: result.rows[0] })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Tietokantavirhe' })
  }
})

// GET - hae kaikki tilaukset
app.get('/api/tilaukset', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tilaukset ORDER BY luotu_at DESC')
    res.json(result.rows)
  } catch (err) {
    res.status(500).json({ error: 'Tietokantavirhe' })
  }
})

app.listen(3001, () => console.log('Backend käynnissä portissa 3001'))