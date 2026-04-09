import ProjectDetailPage from "../../../components/projects/ProjectDetailPage";

export default function BillionPoundPage() {
  return (
    <ProjectDetailPage
      title="Billion Pound"
      category="Fitness & Gym Tracking App"
      description="A comprehensive fitness and gym tracking application that helps users monitor workouts, track progress, and achieve fitness goals with advanced analytics and personalized recommendations."
      technologies={[
        "React Native",
        "Firebase",
        "Redux Toolkit",
        "React Navigation",
        "AsyncStorage",
        "React Native Charts",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT Authentication",
      ]}
      keyHighlights={[
        "Advanced workout planning and scheduling",
        "Real-time progress tracking and analytics",
        "Personalized exercise recommendations",
        "Comprehensive exercise library",
        "Offline mode with data sync",
        "Achievement system and gamification",
      ]}
      challenges={[
        {
          title: "Real-time data synchronization",
          challenge: "Syncing progress and workout history across devices with offline support.",
          solution: "Implemented Firebase-based sync with local caching and conflict-safe updates.",
        },
        {
          title: "Large data performance",
          challenge: "Heavy workout history could slow list and chart rendering.",
          solution: "Used pagination, lightweight rendering, and optimized query patterns.",
        },
      ]}
      screenshots={[
        "/images/BillionPound/b1.webp",
        "/images/BillionPound/b2.webp",
        "/images/BillionPound/b3.webp",
        "/images/BillionPound/b4.webp",
        "/images/BillionPound/b5.webp",
        "/images/BillionPound/b6.webp",
      ]}
      screenshotLabels={[
        "Login & Onboarding",
        "Home & Dashboard",
        "Workout Plans",
        "Progress & Analytics",
        "Exercise Library",
        "Profile & Settings",
      ]}
    />
  );
}
