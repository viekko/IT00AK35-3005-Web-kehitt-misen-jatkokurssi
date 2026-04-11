import { useState } from 'react'
import { z } from 'zod'

const schema = z.object({
  nimi: z.string().min(2, 'Nimi on liian lyhyt (min. 2 merkkiä)'),
  email: z.string().email('Sähköpostiosoite ei ole kelvollinen'),
  puhelin: z.string().min(7, 'Puhelinnumero on liian lyhyt'),
  tuote: z.string().min(1, 'Valitse tuote'),
  maara: z.coerce.number().min(1, 'Määrän täytyy olla vähintään 1').max(9999, 'Liian suuri määrä'),
  pvm: z.string().min(1, 'Valitse toimituspäivämäärä'),
})

function FormPage() {
  const [formData, setFormData] = useState({
    nimi: '', email: '', puhelin: '', tuote: '', maara: '', pvm: ''
  })
  const [errors, setErrors] = useState({})
  const [response, setResponse] = useState(null)
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrors({})
    setResponse(null)
    setSubmitError('')

    const result = schema.safeParse(formData)
    if (!result.success) {
      const fieldErrors = {}
      result.error.errors.forEach(err => {
        fieldErrors[err.path[0]] = err.message
      })
      setErrors(fieldErrors)
      return
    }

    setLoading(true)
    try {
      const res = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(result.data),
      })
      const data = await res.json()
      setResponse(data)
    } catch (err) {
      setSubmitError('Verkkovirhe. Yritä uudelleen.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container" style={{ display: 'block', maxWidth: '700px' }}>
      <article className="content-article">
        <h2>Tilauslomake</h2>
        <p style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Täytä lomake ja lähetä tilaus. Otamme yhteyttä vahvistusta varten.
        </p>

        <form onSubmit={handleSubmit} className="contact-form" noValidate>

          {/* TEKSTI - nimi */}
          <label htmlFor="nimi">Nimi *</label>
          <input
            id="nimi" type="text" name="nimi"
            value={formData.nimi} onChange={handleChange}
            placeholder="Etunimi Sukunimi"
          />
          {errors.nimi && <span style={errStyle}>{errors.nimi}</span>}

          {/* EMAIL */}
          <label htmlFor="email">Sähköposti *</label>
          <input
            id="email" type="email" name="email"
            value={formData.email} onChange={handleChange}
            placeholder="nimi@esimerkki.fi"
          />
          {errors.email && <span style={errStyle}>{errors.email}</span>}

          {/* TEL - puhelinnumero */}
          <label htmlFor="puhelin">Puhelinnumero *</label>
          <input
            id="puhelin" type="tel" name="puhelin"
            value={formData.puhelin} onChange={handleChange}
            placeholder="+358 40 123 4567"
          />
          {errors.puhelin && <span style={errStyle}>{errors.puhelin}</span>}

          {/* SELECT - tuote */}
          <label htmlFor="tuote">Tuote *</label>
          <select id="tuote" name="tuote" value={formData.tuote} onChange={handleChange}>
            <option value="">-- Valitse tuote --</option>
            <option value="Polytuft-matto">Polytuft-matto</option>
            <option value="Horredsmattan-matto">Horredsmattan-matto</option>
            <option value="Malla-matto">Malla-matto</option>
            <option value="Mogihome-matto">Mogihome-matto</option>
          </select>
          {errors.tuote && <span style={errStyle}>{errors.tuote}</span>}

          {/* NUMBER - määrä */}
          <label htmlFor="maara">Määrä (kpl) *</label>
          <input
            id="maara" type="number" name="maara"
            value={formData.maara} onChange={handleChange}
            placeholder="1" min="1" max="9999"
          />
          {errors.maara && <span style={errStyle}>{errors.maara}</span>}

          {/* DATE - toimituspäivä */}
          <label htmlFor="pvm">Toivottu toimituspäivä *</label>
          <input
            id="pvm" type="date" name="pvm"
            value={formData.pvm} onChange={handleChange}
          />
          {errors.pvm && <span style={errStyle}>{errors.pvm}</span>}

          {submitError && <span style={errStyle}>{submitError}</span>}

          <button type="submit" disabled={loading}>
            {loading ? 'Lähetetään...' : 'Lähetä tilaus'}
          </button>
        </form>
      </article>

      {response && (
        <article className="content-article" style={{ marginTop: '2rem' }}>
          <h2>✅ Tilaus vastaanotettu!</h2>
          <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Httpbin vahvisti seuraavan datan:
          </p>
          <pre style={{
            background: '#f4f3e8', padding: '1rem',
            borderRadius: '10px', overflowX: 'auto',
            fontSize: '0.85rem', textAlign: 'left'
          }}>
            {JSON.stringify(JSON.parse(response.data), null, 2)}
          </pre>
        </article>
      )}
    </main>
  )
}

const errStyle = {
  color: '#cc0000',
  fontSize: '0.85rem',
  marginTop: '-0.5rem'
}

export default FormPage