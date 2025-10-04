import { Scissors } from "lucide-react";
import { NavLink } from "react-router-dom";
export const Footer: React.FC = () => (
  <footer className="bg-black border-t border-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <Scissors className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Elite Cuts</span>
          </div>
          <p className="text-gray-400 text-sm">
            Dubai's premier barbering destination for the modern gentleman.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { path: "/", label: "Home" },
              { path: "/services", label: "Services" },
              { path: "/barbers", label: "Barbers" },
              { path: "/reviews", label: "Reviews" },
              { path: "/contact", label: "Contact" },
            ].map(({ path, label }) => (
              <li key={label}>
                <NavLink
                  to={path}
                  className="text-gray-400 hover:text-amber-600 text-sm transition-colors cursor-pointer"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Haircuts & Styling</li>
            <li>Beard Grooming</li>
            <li>Royal Shave</li>
            <li>Hair Treatments</li>
            <li>Color Services</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <div>Silicon Oasis, Dubai</div>
            <div>+971 4 XXX XXXX</div>
            <div>info@elitecuts.ae</div>
          </div>
          <div className="flex space-x-3 mt-4">
            {["Instagram", "Facebook", "Twitter"].map((social) => (
              <button
                key={social}
                className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-all cursor-pointer"
              >
                <span className="text-xs">{social[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8 text-center">
        <p className="text-gray-400 text-sm">
          © 2025 Elite Cuts. All rights reserved. Crafted with precision for the
          modern gentleman.
        </p>
      </div>
    </div>
  </footer>
);
