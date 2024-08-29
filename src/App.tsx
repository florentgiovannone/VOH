import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ShowNavBar from './components/showNavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Router>
        <ShowNavBar>
          <Nav />
        </ShowNavBar>

        <div className="content bg-pink text-green">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobreMi" element={<AboutMe />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

