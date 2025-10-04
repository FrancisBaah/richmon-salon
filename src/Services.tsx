import { Clock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingStep, setBookingStep] = useState<number>(1);
  const navigate = useNavigate();
  const openBooking = (service: Service) => {
    setSelectedService(service);
    setBookingStep(1);
    navigate("/booking");
  };
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
  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-400">
            Premium grooming tailored to perfection
          </p>
        </div>

        <div className="space-y-12">
          {services.map((category) => (
            <div key={category.id}>
              <h3 className="text-2xl font-bold text-amber-600 mb-6">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {category.items.map((service, idx) => (
                  <div
                    key={idx}
                    className="group bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-amber-600/50 transition-all hover:transform hover:scale-105 cursor-pointer"
                    onClick={() => openBooking(service)}
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img
                        src={`https://images.unsplash.com/photo-${
                          idx === 0
                            ? "1503951914724-452d51e7a8b7"
                            : idx === 1
                            ? "1622287162716-f311baa1a2b8"
                            : idx === 2
                            ? "1621605815971-fbc98d665033"
                            : idx === 3
                            ? "1493256338651-d82f7acb2b38"
                            : idx === 4
                            ? "1621607003977-c7b935578249"
                            : idx === 5
                            ? "1599351431202-1e0f0137899a"
                            : idx === 6
                            ? "1621607005405-e826acf98112"
                            : idx === 7
                            ? "1560066984-3a867e8c24db"
                            : "1622286342621-4bd786c2447c"
                        }?w=400&h=300&fit=crop`}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-semibold text-white">
                          {service.name}
                        </h4>
                        <div className="text-2xl font-bold text-amber-600">
                          AED {service.price}
                        </div>
                      </div>
                      <p className="text-gray-400 text-sm mb-4">
                        {service.desc}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {service.duration}
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openBooking(service);
                          }}
                          className="px-4 py-2 bg-amber-600 text-white text-sm font-medium rounded-lg hover:bg-amber-700 transition-colors cursor-pointer"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
