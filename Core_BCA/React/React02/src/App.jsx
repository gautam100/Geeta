import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Api from "./components/Api";
import University from "./components/University";

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
            <Route path="/api" element={<Api />} />
            <Route path="/context-api123" element={<University />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
