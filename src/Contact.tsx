import { Clock, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
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
interface BookingFormInputs {
  name: string;
  phone: string;
  email: string;
}
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
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormInputs>({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    const validationErrors = validateForm(formData, true);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    console.log("Contact Form Data:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setErrors({});
    // Add API call here for production
  };

  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-gray-400">
            Your premium grooming destination in Dubai
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <div className="text-white font-semibold mb-1">
                      Location
                    </div>
                    <div className="text-gray-400">
                      Silicon Oasis, Dubai
                      <br />
                      United Arab Emirates
                    </div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <div className="text-white font-semibold mb-1">Phone</div>
                    <div className="text-gray-400">+971 4 XXX XXXX</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <div className="text-white font-semibold mb-1">Email</div>
                    <div className="text-gray-400">info@elitecuts.ae</div>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-amber-600 mr-4 mt-1" />
                  <div>
                    <div className="text-white font-semibold mb-1">
                      Opening Hours
                    </div>
                    <div className="text-gray-400">
                      Sunday - Thursday: 9:00 AM - 9:00 PM
                      <br />
                      Friday - Saturday: 9:00 AM - 10:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-600 focus:border-amber-600 focus:outline-none transition-colors cursor-text ${
                    errors.name ? "border-red-500" : "border-gray-800"
                  }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-600 focus:border-amber-600 focus:outline-none transition-colors cursor-text ${
                    errors.email ? "border-red-500" : "border-gray-800"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-600 focus:border-amber-600 focus:outline-none transition-colors cursor-text ${
                    errors.phone ? "border-red-500" : "border-gray-800"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className={`w-full px-4 py-3 bg-gray-900 border rounded-lg text-white placeholder-gray-600 focus:border-amber-600 focus:outline-none transition-colors resize-none cursor-text ${
                    errors.message ? "border-red-500" : "border-gray-800"
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-bold rounded-lg hover:from-amber-700 hover:to-amber-800 transition-all transform hover:scale-105 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
