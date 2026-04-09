import ProjectDetailPage from "../../../components/projects/ProjectDetailPage";

export default function SpotSwapPage() {
  return (
    <ProjectDetailPage
      title="SpotSwap"
      category="Parking Spot Sharing Platform"
      description="A parking spot sharing platform connecting parking-space owners with drivers through real-time availability, fast booking flow, and integrated navigation."
      technologies={[
        "React Native",
        "Firebase",
        "Google Maps API",
        "Stripe",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.io",
        "JWT Authentication",
        "Geolocation Services",
      ]}
      keyHighlights={[
        "Real-time parking space discovery",
        "GPS-enabled navigation and directions",
        "Instant booking and reservation flow",
        "Secure in-app payment processing",
        "Owner dashboard and revenue analytics",
        "Push notifications for bookings",
      ]}
      challenges={[
        {
          title: "Location accuracy",
          challenge: "Ensuring precise parking coordinates with live availability updates.",
          solution: "Combined Maps API geofencing with real-time updates for reliable discovery.",
        },
        {
          title: "Transaction trust",
          challenge: "Building confidence in peer-to-peer parking payments.",
          solution: "Integrated secure payment flow with verification and review-driven trust signals.",
        },
      ]}
      screenshots={[
        "/images/SpotSwap/s1.webp",
        "/images/SpotSwap/s2.webp",
        "/images/SpotSwap/s3.webp",
        "/images/SpotSwap/s4.webp",
        "/images/SpotSwap/s5.webp",
        "/images/SpotSwap/s6.webp",
        "/images/SpotSwap/s7.webp",
        "/images/SpotSwap/s8.webp",
        "/images/SpotSwap/s9.webp",
      ]}
      screenshotLabels={[
        "Home & Map",
        "Search & Filters",
        "Parking Detail",
        "Booking",
        "Payment",
        "Profile",
        "Owner Dashboard",
        "Reviews",
        "Notifications",
      ]}
    />
  );
}
