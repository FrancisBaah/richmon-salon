import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Barbers } from "./Barbers";
import { Reviews } from "./Review";
import { Booking } from "./Booking";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
