import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Required for interactive features


function App() {
  return (
    <>
      <div className="container-fluid">
        <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
