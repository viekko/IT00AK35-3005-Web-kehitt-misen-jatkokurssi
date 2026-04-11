import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import AdBar from '../components/AdBar'

function HomePage() {
  return (
    <main className="container">
      <Sidebar />
      <MainContent />
      <AdBar />
    </main>
  )
}

export default HomePage