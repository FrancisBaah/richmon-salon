export interface Service {
  name: string;
  price: number;
  duration: string;
  desc: string;
}

export interface ServiceCategory {
  id: number;
  category: string;
  items: Service[];
}

export interface Barber {
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

export interface BookingFormInputs {
  name: string;
  phone: string;
  email: string;
}

export interface ContactFormInputs {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const services: ServiceCategory[] = [
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

export const barbers: Barber[] = [
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

export const timeSlots: string[] = [
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

export const validateForm = (
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
