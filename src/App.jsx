import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Theme from './pages/theme/Theme'
import About from './pages/about/About'
import Paper from './pages/papers/Paper'
import Contact from './pages/contact/Contact'


function App() {

  return (
    <div>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/themes" element={<Theme />} />
        <Route path="/about" element={<About />} />
        <Route path="/call-for-papers" element={<Paper />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
     <Footer/>
    </div>
  )
}

export default App
