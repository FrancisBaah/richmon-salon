import { useState } from "react";
import { Check } from "lucide-react";
interface Service {
  name: string;
  price: number;
  duration: string;
  desc: string;
}
interface ServiceCategory {
  id: number;
  category: string;
  items: Service[];
}
interface Barber {
  id: number;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  rating: number;
  reviews: number;
  image: string;
  bio: string;
}
interface BookingFormInputs {
  name: string;
  phone: string;
  email: string;
}
interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
const barbers: Barber[] = [
  {
    id: 1,
    name: "Richmond",
    title: "Master Barber & Owner",
    specialty: "All Styles & Techniques",
    experience: "12 years",
    rating: 4.9,
    reviews: 1050,
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=400&fit=crop",
    bio: "Expert barber based in Silicon Oasis, Dubai. Specializing in classic cuts, modern fades, beard grooming, and premium styling services. Committed to delivering excellence in every cut.",
  },
];
const services: ServiceCategory[] = [
  {
    id: 1,
    category: "Classic Cuts",
    items: [
      {
        name: "Signature Haircut",
        price: 80,
        duration: "45 min",
        desc: "Precision cut tailored to your style",
      },
      {
        name: "Buzz Cut",
        price: 50,
        duration: "20 min",
        desc: "Clean and sharp military-style cut",
      },
      {
        name: "Fade Mastery",
        price: 100,
        duration: "60 min",
        desc: "Expert fade with sharp line work",
      },
    ],
  },
  {
    id: 2,
    category: "Premium Services",
    items: [
      {
        name: "Royal Shave",
        price: 70,
        duration: "30 min",
        desc: "Hot towel treatment with straight razor",
      },
      {
        name: "Beard Sculpting",
        price: 60,
        duration: "30 min",
        desc: "Precision beard trim and styling",
      },
      {
        name: "Executive Package",
        price: 180,
        duration: "90 min",
        desc: "Complete grooming experience",
      },
    ],
  },
  {
    id: 3,
    category: "Styling & Treatments",
    items: [
      {
        name: "Hair Styling",
        price: 40,
        duration: "20 min",
        desc: "Professional styling for any occasion",
      },
      {
        name: "Scalp Treatment",
        price: 90,
        duration: "45 min",
        desc: "Rejuvenating scalp massage and treatment",
      },
      {
        name: "Color Service",
        price: 150,
        duration: "90 min",
        desc: "Modern hair coloring techniques",
      },
    ],
  },
];
const timeSlots: string[] = [
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];
const validateForm = (
  data: ContactFormInputs | BookingFormInputs,
  isContactForm: boolean = false
): FormErrors => {
  const errors: FormErrors = {};
  if (!data.name.trim()) {
    errors.name = "Name is required";
  } else if (data.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  }

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(data.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!data.phone.trim()) {
    errors.phone = "Phone number is required";
  } else if (!/^\+?[1-9]\d{1,14}$/.test(data.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (isContactForm && "message" in data) {
    if (!data.message.trim()) {
      errors.message = "Message is required";
    } else if (data.message.length < 10) {
      errors.message = "Message must be at least 10 characters";
    }
  }

  return errors;
};
export const Booking: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null);
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
    // Clear error for the field being edited
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
    // Reset form and booking state
    setFormData({ name: "", phone: "", email: "" });
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedDate("");
    setSelectedTime("");
    setBookingStep(1);
    // Add API call here for production
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
