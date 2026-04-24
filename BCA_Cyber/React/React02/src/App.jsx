import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Useeffect from "./pages/Useeffect"


function App() {

  return (
    <>
    <div className="container">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/use-effect" element={<Useeffect />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
