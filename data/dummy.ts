import type { ProjectData } from "@/types";

export const projectData: ProjectData = {
  "projectId": "14",
  "folder": "14-revique-travel",
  "appName": "Revique Travel",
  "domain": "Travel Booking",
  "heroHeadline": "Curated journeys for the modern explorer",
  "heroSubtitle": "Discover exclusive travel packages, book premium flights, and organize your itinerary in one place.",
  "features": [
    {
      "icon": "Plane",
      "title": "Flight Bookings",
      "description": "Find and reserve the best routes with top-tier airlines."
    },
    {
      "icon": "Map",
      "title": "Curated Itineraries",
      "description": "Day-by-day plans designed by local travel experts."
    },
    {
      "icon": "Hotel",
      "title": "Luxury Stays",
      "description": "Access exclusive rates at premium hotels and resorts."
    },
    {
      "icon": "Compass",
      "title": "Guided Tours",
      "description": "Experience destinations with knowledgeable local guides."
    }
  ],
  "stats": [
    {
      "label": "Active Packages",
      "value": "45",
      "trend": "+3"
    },
    {
      "label": "Happy Travelers",
      "value": "12.5K",
      "trend": "+15%"
    },
    {
      "label": "Destinations",
      "value": "28",
      "trend": "+2"
    },
    {
      "label": "Bookings this Month",
      "value": "342",
      "trend": "+8%"
    }
  ],
  "tableColumns": [
    {
      "key": "destination",
      "label": "Destination"
    },
    {
      "key": "duration",
      "label": "Duration"
    },
    {
      "key": "price",
      "label": "Price"
    },
    {
      "key": "pax",
      "label": "Pax"
    },
    {
      "key": "departure",
      "label": "Departure"
    },
    {
      "key": "status",
      "label": "Status"
    }
  ],
  "tableRows": [
    {
      "id": "PKG-001",
      "destination": "Kyoto, Japan",
      "duration": "7 Days",
      "price": "Rp 25.000.000",
      "pax": "2",
      "departure": "2026-05-10",
      "status": "Available"
    },
    {
      "id": "PKG-002",
      "destination": "Santorini, Greece",
      "duration": "10 Days",
      "price": "Rp 45.000.000",
      "pax": "2",
      "departure": "2026-06-15",
      "status": "Limited"
    },
    {
      "id": "PKG-003",
      "destination": "Bali, Indonesia",
      "duration": "5 Days",
      "price": "Rp 8.500.000",
      "pax": "4",
      "departure": "2026-04-28",
      "status": "Sold Out"
    },
    {
      "id": "PKG-004",
      "destination": "Swiss Alps",
      "duration": "8 Days",
      "price": "Rp 35.000.000",
      "pax": "2",
      "departure": "2026-12-05",
      "status": "Upcoming"
    },
    {
      "id": "PKG-005",
      "destination": "Seoul, South Korea",
      "duration": "6 Days",
      "price": "Rp 18.000.000",
      "pax": "1",
      "departure": "2026-05-20",
      "status": "Available"
    },
    {
      "id": "PKG-006",
      "destination": "Maldives Resort",
      "duration": "5 Days",
      "price": "Rp 55.000.000",
      "pax": "2",
      "departure": "2026-07-10",
      "status": "Limited"
    },
    {
      "id": "PKG-007",
      "destination": "Cappadocia, Turkey",
      "duration": "7 Days",
      "price": "Rp 22.000.000",
      "pax": "2",
      "departure": "2026-09-15",
      "status": "Upcoming"
    },
    {
      "id": "PKG-008",
      "destination": "Raja Ampat Cruise",
      "duration": "4 Days",
      "price": "Rp 15.000.000",
      "pax": "2",
      "departure": "2026-06-01",
      "status": "Available"
    }
  ],
  "statuses": [
    "Available",
    "Sold Out",
    "Upcoming",
    "Limited"
  ],
  "ctaHeadline": "Your next adventure awaits",
  "ctaSubtitle": "Book your dream vacation today and let us handle the details.",
  "ctaButtonText": "Explore Destinations",
  "readmeDescription": "A travel agency booking platform displaying tour packages, itineraries, and trip statuses.",
  "readmeFeaturesList": [
    "Tour package catalog",
    "Travel date management",
    "Pricing and capacity tracking",
    "Clean, exploratory UI"
  ],
  "theme": {
    "heroLayout": "left",
    "navStyle": "solid",
    "cardStyle": "bordered",
    "primary": "#0284c7",
    "secondary": "#f97316",
    "accent": "#ffffff",
    "background": "#f0f9ff",
    "text": "#0c4a6e",
    "heroGradient": "linear-gradient(135deg, rgba(2, 132, 199, 0.98) 0%, rgba(249, 115, 22, 0.88) 100%)",
    "heroGlow": "radial-gradient(circle at 15% 15%, rgba(249, 115, 22, 0.36) 0%, transparent 42%)",
    "heroEdge": "radial-gradient(circle at 90% 10%, rgba(255, 255, 255, 0.14) 0%, transparent 28%)",
    "surface": "rgba(2, 132, 199, 0.05)",
    "surfaceStrong": "rgba(2, 132, 199, 0.08)",
    "border": "rgba(2, 132, 199, 0.12)",
    "borderStrong": "rgba(2, 132, 199, 0.22)",
    "softText": "rgba(12, 74, 110, 0.72)",
    "primarySoft": "rgba(2, 132, 199, 0.12)",
    "secondarySoft": "rgba(249, 115, 22, 0.12)",
    "secondaryStrong": "rgba(249, 115, 22, 0.18)",
    "accentSoft": "rgba(255, 255, 255, 0.8)"
  }
};
