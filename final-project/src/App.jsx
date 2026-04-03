import Header from './components/Header'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import AdBar from './components/AdBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Sidebar />
        <MainContent />
        <AdBar />
      </main>
      <Footer />
    </>
  )
}

export default App