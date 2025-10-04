import { Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services, type Service } from "../assets/types";

interface ServicesProps {
  selectedService: Service | null;
  setSelectedService: React.Dispatch<React.SetStateAction<Service | null>>;
  setBookingStep: React.Dispatch<React.SetStateAction<number>>;
}

export const Services: React.FC<ServicesProps> = ({
  //   selectedService,
  setSelectedService,
  setBookingStep,
}) => {
  const navigate = useNavigate();

  const openBooking = (service: Service) => {
    setSelectedService(service);
    setBookingStep(1);
    navigate("/booking");
  };

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
                        src={
                          service.name === "Signature Haircut"
                            ? "/signature.jpg"
                            : service.name === "Buzz Cut"
                            ? "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop"
                            : service.name === "Fade Mastery"
                            ? "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400&h=300&fit=crop"
                            : service.name === "Royal Shave"
                            ? "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop"
                            : service.name === "Beard Sculpting"
                            ? "/beard.webp"
                            : service.name === "Executive Package"
                            ? "/excutive.jpg"
                            : service.name === "Hair Styling"
                            ? "/styling.jpg"
                            : service.name === "Scalp Treatment"
                            ? "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400&h=300&fit=crop"
                            : service.name === "Color Service"
                            ? "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=400&h=300&fit=crop"
                            : "https://images.unsplash.com/photo-1600585154341-be6161a56a0d?w=400&h=300&fit=crop" // Fallback
                        }
                        alt={`${service.name} at The Richmond Experience`}
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
