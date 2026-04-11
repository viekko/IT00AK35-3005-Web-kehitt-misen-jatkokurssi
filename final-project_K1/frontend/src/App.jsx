import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import TilauksetPage from './pages/TilauksetPage'
import './App.css'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lomake" element={<FormPage />} />
        <Route path="/tilaukset" element={<TilauksetPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App