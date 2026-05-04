import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Useeffect from "./pages/Useeffect"
import Api from "./pages/Api"
import LifeCycle from "./pages/Lifecycle"


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
        <Route path="/api" element={<Api />} />
        <Route path="/life-cycle" element={<LifeCycle />} />
      </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
