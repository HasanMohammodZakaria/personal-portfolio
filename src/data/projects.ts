export interface Project {
  title: string;
  slug: string;
  shortDescription: string;
  description: string;

  // Card image (hero/landing screenshot)
  image: string;

  // Detail page gallery: dashboard, detail page, mobile view
  images: string[];

  features: string[];
  problemSolving: string[];
  futureImprovements: string[];

  technologies: {
    frontend: string[];
    backend: string[];
    database: string[];
    deployment: string[];
    tools: string[];
  };

  live: string;
  github: string;
}

export const projects: Project[] = [
  {
    title: "Car Rental",
    slug: "car-rental",
    shortDescription:
      "A full-stack car rental platform for browsing, booking and managing vehicles.",
    description:
      "Car Rental is a modern full-stack application where users can browse available cars, check details, and book a vehicle for a chosen date range, while admins manage the fleet, bookings and availability from a dedicated dashboard.",

    image: "/projects/car-rental.png",
    images: [
      "/projects/car-rental-booking.png",
      "/projects/car-rental-detail.png",
      "/projects/car-rental-mobile.png",
    ],

    features: [
      "Car listing with search and filters",
      "Booking system with date range selection",
      "User authentication",
      "Admin dashboard for fleet management",
      "Responsive modern UI",
    ],
    problemSolving: [
      "Designed a booking flow that prevents double-booking of the same car",
      "Structured car and booking data for fast filtering and search",
      "Implemented role-based access for users and admins",
      "Built reusable, responsive UI components across the app",
    ],
    futureImprovements: [
      "Add online payment integration for advance booking",
      "Add real-time car availability using webhooks",
      "Add review and rating system for rented cars",
      "Add map-based car pickup location selection",
    ],

    technologies: {
      frontend: ["Next.js", "JavaScript", "Tailwind CSS", "Framer Motion", "Better Auth"],
      backend: ["Node.js", "Express.js", "JWT"],
      database: ["MongoDB"],
      deployment: ["Vercel"],
      tools: ["Git", "GitHub", "Figma"],
    },

    live: "https://car-rental-kohl-delta.vercel.app",
    github: "https://github.com/HasanMohammodZakaria/car-rental-app-client-assignment-09",
  },

  {
    title: "MediNexa",
    slug: "medinexa",
    shortDescription:
      "A healthcare management system connecting patients and doctors.",
    description:
      "MediNexa Connect is a healthcare platform that provides appointment booking, doctor management, digital prescriptions and secure healthcare workflow.",

    image: "/projects/medi-nexa.png",
    images: [
      "/projects/medinexa-dashboard.png",
      "/projects/medinexa-detail.png",
      "/projects/medinexa-mobile.png",
    ],

    features: [
      "Patient dashboard",
      "Doctor dashboard",
      "Appointment booking",
      "Digital prescription",
      "Payment integration",
    ],
    problemSolving: [
      "Managed complex healthcare workflows",
      "Implemented role-based access",
      "Organized medical data efficiently",
      "Created secure user authentication",
      "Created secure Payment integration in Stripe",
    ],
    futureImprovements: [
      "Add video consultation between doctor and patient",
      "Add SMS/email reminders for upcoming appointments",
      "Add multi-language support for wider accessibility",
      "Add analytics dashboard for doctors",
    ],

    technologies: {
      frontend: ["Next.js", "JavaScript", "Tailwind CSS", "Better Auth"],
      backend: ["Node.js", "Express.js", "JWT"],
      database: ["MongoDB"],
      deployment: ["Vercel"],
      tools: ["Git", "GitHub", "Figma"],
    },

    live: "https://medicare-client-smoky.vercel.app",
    github: "https://github.com/HasanMohammodZakaria/medicare-client",
  },

  {
    title: "Estate Hub",
    slug: "estate-hub",
    shortDescription:
      "A modern real estate platform for property management and exploration.",
    description:
      "Estate Hub is a full-stack real estate application where users can explore properties, manage listings and interact with a modern responsive interface.",

    image: "/projects/estate-hub.png",
    images: [
      "/projects/estate-hub-properties.png",
      "/projects/estate-hub-detail.png",
      "/projects/estate-hub-mobile.png",
    ],

    features: [
      "Property listing",
      "Property details",
      "User authentication",
      "Responsive design",
      "Dashboard management",
    ],
    problemSolving: [
      "Structured large property data",
      "Created reusable UI architecture",
      "Improved user navigation",
      "Built scalable application structure",
    ],
    futureImprovements: [
      "Add advanced filters (price range, location radius, amenities)",
      "Add saved/favorite properties for logged-in users",
      "Add real-time chat between buyer and seller",
      "Add map view for property locations",
    ],

    technologies: {
      frontend: ["Next.js", "TypeScript", "Tailwind CSS", "Better Auth"],
      backend: ["Node.js", "Express.js", "JWT"],
      database: ["MongoDB"],
      deployment: ["Vercel", "Railway"],
      tools: ["Git", "GitHub", "Figma"],
    },

    live: "https://real-estate-client-mu.vercel.app",
    github: "https://github.com/HasanMohammodZakaria/real-estate-client",
  },
];