import { useState } from "react";
import { Check } from "lucide-react";
import { barbers, services, timeSlots, validateForm } from "./types";
import type { Service, Barber, BookingFormInputs, FormErrors } from "./types";

interface BookingProps {
  selectedService: Service | null;
  setSelectedService: React.Dispatch<React.SetStateAction<Service | null>>;
  bookingStep: number;
  setBookingStep: React.Dispatch<React.SetStateAction<number>>;
  selectedDate: string;
  setSelectedDate: React.Dispatch<React.SetStateAction<string>>;
  selectedTime: string;
  setSelectedTime: React.Dispatch<React.SetStateAction<string>>;
  selectedBarber: Barber | null;
  setSelectedBarber: React.Dispatch<React.SetStateAction<Barber | null>>;
}

export const Booking: React.FC<BookingProps> = ({
  selectedService,
  setSelectedService,
  bookingStep,
  setBookingStep,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  selectedBarber,
  setSelectedBarber,
}) => {
  const [formData, setFormData] = useState<BookingFormInputs>({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Booking Form Data:", {
      ...formData,
      service: selectedService,
      barber: selectedBarber,
      date: selectedDate,
      time: selectedTime,
    });
    setFormData({ name: "", phone: "", email: "" });
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedDate("");
    setSelectedTime("");
    setBookingStep(1);
  };

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Book Your Appointment
          </h2>
          <p className="text-xl text-gray-400">
            Complete your booking in 3 easy steps
          </p>
        </div>

        <div className="flex justify-center mb-12">
          {[1, 2, 3].map((step) => (
            <div key={step} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  bookingStep >= step
                    ? "bg-amber-600 text-white"
                    : "bg-gray-800 text-gray-500"
                }`}
              >
                {bookingStep > step ? <Check className="w-5 h-5" /> : step}
              </div>
              {step < 3 && (
                <div
                  className={`w-20 h-1 ${
                    bookingStep > step ? "bg-amber-600" : "bg-gray-800"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
          {bookingStep === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Select Service
              </h3>
              <div className="space-y-3">
                {services
                  .flatMap((cat) => cat.items)
                  .map((service, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedService(service);
                        setBookingStep(2);
                      }}
                      className={`w-full p-4 rounded-lg border text-left transition-all cursor-pointer ${
                        selectedService?.name === service.name
                          ? "border-amber-600 bg-amber-600/10"
                          : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-semibold">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {service.duration}
                          </div>
                        </div>
                        <div className="text-amber-600 font-bold">
                          AED {service.price}
                        </div>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {bookingStep === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Choose Barber & Date
              </h3>
              <div className="space-y-6">
                <div>
                  <label className="text-gray-400 mb-3 block">
                    Select Barber
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {barbers.map((barber) => (
                      <button
                        key={barber.id}
                        onClick={() => setSelectedBarber(barber)}
                        className={`p-4 rounded-lg border text-left transition-all flex items-center space-x-4 cursor-pointer ${
                          selectedBarber?.id === barber.id
                            ? "border-amber-600 bg-amber-600/10"
                            : "border-gray-800 bg-gray-900/50 hover:border-gray-700"
                        }`}
                      >
                        <img
                          src={barber.image}
                          alt={barber.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div>
                          <div className="text-white font-semibold">
                            {barber.name}
                          </div>
                          <div className="text-sm text-gray-400">
                            {barber.title}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 mb-3 block">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setSelectedDate(e.target.value)
                    }
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg text-white focus:border-amber-600 focus:outline-none cursor-pointer"
                  />
                </div>

                <div>
                  <label className="text-gray-400 mb-3 block">
                    Select Time
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg border text-sm transition-all cursor-pointer ${
                          selectedTime === time
                            ? "border-amber-600 bg-amber-600 text-white"
                            : "border-gray-800 bg-gray-900/50 text-gray-400 hover:border-gray-700"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setBookingStep(3)}
                  disabled={!selectedBarber || !selectedDate || !selectedTime}
                  className="w-full px-6 py-3 bg-amber-600 text-white font-semibold rounded-lg hover:bg-amber-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {bookingStep === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Confirm Booking
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-gray-400 text-sm mb-1">Service</div>
                  <div className="text-white font-semibold">
                    {selectedService?.name}
                  </div>
                  <div className="text-amber-600 font-bold">
                    AED {selectedService?.price}
                  </div>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-gray-400 text-sm mb-1">Barber</div>
                  <div className="text-white font-semibold">
                    {selectedBarber?.name}
                  </div>
                </div>

                <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="text-gray-400 text-sm mb-1">Date & Time</div>
                  <div className="text-white font-semibold">
                    {selectedDate} at {selectedTime}
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-600 focus:border-amber-600 focus:outline-none cursor-text ${
                        errors.name ? "border-red-500" : "border-gray-800"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone Number"
                      className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-600 focus:border-amber-600 focus:outline-none cursor-text ${
                        errors.phone ? "border-red-500" : "border-gray-800"
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-600 focus:border-amber-600 focus:outline-none cursor-text ${
                        errors.email ? "border-red-500" : "border-gray-800"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 cursor-pointer"
                >
                  Confirm Appointment
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
