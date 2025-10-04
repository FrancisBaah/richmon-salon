import { useNavigate } from "react-router-dom";
import { Clock, Star, Award } from "lucide-react";
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
export const Barbers: React.FC = () => {
  const navigate = useNavigate();
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

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Meet Richmond
          </h2>
          <p className="text-xl text-gray-400">
            Your expert barber in Silicon Oasis
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden hover:border-amber-600/50 transition-all"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div className="h-96 md:h-auto overflow-hidden">
                  <img
                    src={barber.image}
                    alt={barber.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {barber.name}
                  </h3>
                  <p className="text-amber-600 font-medium text-xl mb-4">
                    {barber.title}
                  </p>
                  <div className="flex items-center mb-6">
                    <Star className="w-6 h-6 text-amber-600 fill-amber-600 mr-2" />
                    <span className="text-white font-semibold text-2xl">
                      {barber.rating}
                    </span>
                    <span className="text-gray-400 text-sm ml-3">
                      ({barber.reviews} reviews)
                    </span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <Award className="w-5 h-5 mr-3 text-amber-600" />
                      <span>{barber.specialty}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-5 h-5 mr-3 text-amber-600" />
                      <span>{barber.experience} of experience</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {barber.bio}
                  </p>
                  <button
                    onClick={() => navigate("/services")}
                    className="px-6 py-3 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all cursor-pointer"
                  >
                    Book with Richmond
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl">
            <img
              src="/excutive.jpg"
              alt="Expertise"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold text-white mb-2">
              Expert Techniques
            </h4>
            <p className="text-gray-400 text-sm">
              Mastery of both classic and modern cutting styles
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400&h=300&fit=crop"
              alt="Premium Tools"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold text-white mb-2">Premium Tools</h4>
            <p className="text-gray-400 text-sm">
              Top-quality equipment for the perfect finish
            </p>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl">
            <img
              src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=400&h=300&fit=crop"
              alt="Personalized Service"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="text-xl font-bold text-white mb-2">
              Personalized Service
            </h4>
            <p className="text-gray-400 text-sm">
              Every cut tailored to your unique style
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
