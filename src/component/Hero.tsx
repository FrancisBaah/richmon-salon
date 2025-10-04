import { useNavigate } from "react-router-dom";
export const Hero: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cpath d="M36 18c3.314 0 6 2.686 6 6s-2.686 6-6 6-6-2.686-6-6 2.686-6 6-6" stroke="rgba(251, 191, 36, 0.1)"%3E%3C/path%3E%3C/g%3E%3C/svg%3E\')',
        }}
      ></div>

      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200&h=800&fit=crop"
          alt="Barbershop"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-block mb-6 px-6 py-2 bg-amber-600/10 border border-amber-600/30 rounded-full backdrop-blur-sm">
          <span className="text-amber-600 text-sm font-medium">
            Premium Barbering Experience
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Elevate Your
          <span className="block bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent">
            Grooming Style
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Expert barbering by Richmond in Silicon Oasis, Dubai. Traditional
          craftsmanship meets modern style.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/services")}
            className="px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 shadow-lg shadow-amber-600/20 cursor-pointer"
          >
            Book Appointment
          </button>
          <button
            onClick={() => navigate("/services")}
            className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-pointer"
          >
            View Services
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center backdrop-blur-sm bg-black/20 p-4 rounded-lg">
            <div className="text-4xl font-bold text-amber-600 mb-2">12+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-black/20 p-4 rounded-lg">
            <div className="text-4xl font-bold text-amber-600 mb-2">5K+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-black/20 p-4 rounded-lg">
            <div className="text-4xl font-bold text-amber-600 mb-2">4.9</div>
            <div className="text-sm text-gray-400">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};
