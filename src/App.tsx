import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Footer from './components/Footer'
function App() {

  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer/>
    </Router>

  )
}

export default App
