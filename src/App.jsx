import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/home/Home";
import Gallery from "./pages/gallery/Gallery";
import "./App.css";



function App() {
  return (
    <>
      <Router basename="masonry-gallery">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
