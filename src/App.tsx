import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBar } from "./component/NavBar";
import { Hero } from "./component/Hero";
import { Services } from "./component/Services";
import { Barbers } from "./component/Barbers";
import { Contact } from "./component/Contact";
import { Footer } from "./component/Footer";
import type { Barber, Service } from "./assets/types";
import { Reviews } from "./component/Review";
import { Booking } from "./component/Booking";

function App() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);

  return (
    <Router>
      <div className="bg-black min-h-screen text-white text-center">
        {/* <NavBar />
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
        <Footer /> */}
        RICHOCO
      </div>
    </Router>
  );
}

export default App;
