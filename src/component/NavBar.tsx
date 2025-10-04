import { Scissors, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
export const NavBar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md z-50 border-b border-amber-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <Scissors className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white tracking-tight">
                Elite Cuts
              </h1>
              <p className="text-xs text-amber-600">Silicon Oasis, Dubai</p>
            </div>
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { path: "/", label: "home" },
              { path: "/services", label: "services" },
              { path: "/barbers", label: "barbers" },
              { path: "/reviews", label: "reviews" },
              { path: "/contact", label: "contact" },
            ].map(({ path, label }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors capitalize cursor-pointer ${
                    isActive
                      ? "text-amber-600"
                      : "text-gray-300 hover:text-white"
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-amber-900/20">
          <div className="px-4 py-4 space-y-3">
            {[
              { path: "/", label: "home" },
              { path: "/services", label: "services" },
              { path: "/barbers", label: "barbers" },
              { path: "/reviews", label: "reviews" },
              { path: "/contact", label: "contact" },
            ].map(({ path, label }) => (
              <NavLink
                key={label}
                to={path}
                className={({ isActive }) =>
                  `block w-full text-left px-4 py-2 rounded-lg capitalize cursor-pointer ${
                    isActive ? "bg-amber-600 text-white" : "text-gray-300"
                  }`
                }
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
