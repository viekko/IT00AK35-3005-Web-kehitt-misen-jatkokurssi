function MainContent() {
  return (
    <div className="content">

      <article className="content-article">
        <h2>Tervetuloa Kehax Oy:n sivuille</h2>
        <p>
          Kehax on mattojen ja sisustustuotteiden maahantuontiin sekä myyntiin erikoistunut yritys.
          Tarjoamme laadukkaita tuotteita jälleenmyyjille ympäri Suomen.
        </p>
      </article>

      <section className="content-gallery">
        <div className="gallery-grid">
          <div className="gallery-item"><img src="/img/room2.png" alt="Matto 1" /></div>
          <div className="gallery-item"><img src="/img/room4.png" alt="Matto 2" /></div>
          <div className="gallery-item"><img src="/img/room3.png" alt="Matto 3" /></div>
          <div className="gallery-item"><img src="/img/room1.png" alt="Matto 4" /></div>
        </div>
      </section>

      <section className="content-extra">
        <h3>Lisätietoa</h3>
        <p>
          <a href="#">Ota yhteyttä</a>, niin kerromme lisää tuotteistamme ja autamme löytämään lähimmän jälleenmyyjän.
        </p>
      </section>

    </div>
  )
}

export default MainContent