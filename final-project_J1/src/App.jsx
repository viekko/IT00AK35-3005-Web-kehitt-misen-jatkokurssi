import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FormPage from './pages/FormPage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lomake" element={<FormPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App