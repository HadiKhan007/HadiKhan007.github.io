import ProjectDetailPage from "../../../components/projects/ProjectDetailPage";

export default function WinRatePage() {
  return (
    <ProjectDetailPage
      title="WinRate"
      category="Competitive Gaming Analytics App"
      description="A gaming performance and analytics product focused on player progression, match insights, and competitive improvement through clear performance signals."
      technologies={[
        "React Native",
        "Firebase",
        "Node.js",
        "Express",
        "MongoDB",
        "Charts",
        "Game Data APIs",
      ]}
      keyHighlights={[
        "Performance tracking dashboards",
        "Player progression and history insights",
        "Leaderboard and ranking visualization",
        "Match review and stat breakdown",
        "Cross-session performance consistency",
        "Mobile-first, fast interaction design",
      ]}
      challenges={[
        {
          title: "Data-heavy UI readability",
          challenge: "High-density match metrics became difficult to scan quickly.",
          solution: "Reorganized information hierarchy and visualized priority metrics first.",
        },
        {
          title: "Large history rendering",
          challenge: "Long gameplay history could cause lag during filtering and scrolling.",
          solution: "Applied lean rendering strategy and optimized query + state updates.",
        },
      ]}
      screenshots={[
        "/images/WinRate/w1.webp",
        "/images/WinRate/w2.webp",
        "/images/WinRate/w3.webp",
        "/images/WinRate/w4.webp",
        "/images/WinRate/w5.webp",
        "/images/WinRate/w6.webp",
        "/images/WinRate/w7.webp",
      ]}
      screenshotLabels={[
        "Main Menu",
        "Lobby",
        "In-Game",
        "Leaderboard",
        "Character Customization",
        "Weapon Progression",
        "Spectator Mode",
      ]}
    />
  );
}
