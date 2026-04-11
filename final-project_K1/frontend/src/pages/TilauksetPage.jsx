import { useEffect, useState } from 'react'

function TilauksetPage() {
  const [tilaukset, setTilaukset] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/tilaukset')
      .then(r => r.json())
      .then(data => { setTilaukset(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  return (
    <main className="container" style={{ display: 'block', maxWidth: '900px' }}>
      <article className="content-article">
        <h2>Tallennetut tilaukset</h2>
        {loading ? <p style={{textAlign:'center'}}>Ladataan...</p> : (
          tilaukset.length === 0
            ? <p style={{textAlign:'center'}}>Ei tilauksia.</p>
            : <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
                <thead>
                  <tr style={{ background: '#ddd' }}>
                    {['#','Nimi','Sähköposti','Puhelin','Tuote','Määrä','Päivä'].map(h =>
                      <th key={h} style={{ padding: '0.5rem', textAlign: 'left' }}>{h}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {tilaukset.map(t => (
                    <tr key={t.id} style={{ borderBottom: '1px solid #ccc' }}>
                      <td style={{padding:'0.5rem'}}>{t.id}</td>
                      <td style={{padding:'0.5rem'}}>{t.nimi}</td>
                      <td style={{padding:'0.5rem'}}>{t.email}</td>
                      <td style={{padding:'0.5rem'}}>{t.puhelin}</td>
                      <td style={{padding:'0.5rem'}}>{t.tuote}</td>
                      <td style={{padding:'0.5rem'}}>{t.maara}</td>
                      <td style={{padding:'0.5rem'}}>{t.pvm?.slice(0,10)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
        )}
      </article>
    </main>
  )
}

export default TilauksetPage