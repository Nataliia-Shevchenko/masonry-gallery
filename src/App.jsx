import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Gallery from "./pages/gallery/Gallery";
import "./App.css";



function App() {
  return (
    <>
      <Router basename="masonry-gallery">
        <NavBar />
        <Routes>
          <Route path="/" element={<Gallery/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
