import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { Barbers } from "./Barbers";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import type { Barber, Service } from "./types";
import { Reviews } from "./Review";
import { Booking } from "./Booking";

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);

  return (
    <Router>
      <div className="bg-black min-h-screen">
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/services"
            element={
              <Services
                selectedService={selectedService}
                setSelectedService={setSelectedService}
                setBookingStep={setBookingStep}
              />
            }
          />
          <Route path="/barbers" element={<Barbers />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route
            path="/booking"
            element={
              <Booking
                selectedService={selectedService}
                setSelectedService={setSelectedService}
                bookingStep={bookingStep}
                setBookingStep={setBookingStep}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                selectedTime={selectedTime}
                setSelectedTime={setSelectedTime}
                selectedBarber={selectedBarber}
                setSelectedBarber={setSelectedBarber}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
