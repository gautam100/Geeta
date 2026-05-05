import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; // Required for interactive features
import ParentComp from "./pages/ParentComp";
import Api from "./pages/Api"; //<< New Line
import SideEffect from "./pages/SideEffect";
import LifeCycle from "./pages/LifeCycle";


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
          <Route path="/props123" element={<ParentComp />} />
          <Route path="/useEffect" element={<SideEffect />} />
          <Route path="/api" element={<Api />} />
          <Route path="/life-cycle" element={<LifeCycle />} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
