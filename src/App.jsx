import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
