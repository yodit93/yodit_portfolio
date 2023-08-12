import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import Portfolio from "./components/Portfolio"
import Home from "./components/Home"
import DetailsPage from "./components/DetailsPage"

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Navigation />
          <Routes>
            <Route path="yodit_portfolio/" element={<Home />} />
            <Route path="/yodit_portfolio/portfolio" element={<Portfolio />} />
            <Route path="/yodit_portfolio/about" element={<About />} />
            <Route path="/yodit_portfolio/contact" element={<Contact />} />
            <Route path="/yodit_portfolio/details/:id" element={<DetailsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
