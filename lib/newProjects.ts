export type NewProjectDetail = {
  folder: string;
  slug: string;
  title: string;
  category: string;
  cardImage: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  keyHighlights: string[];
  challenges: Array<{
    title: string;
    challenge: string;
    solution: string;
  }>;
  screenshots: string[];
  screenshotLabels: string[];
};

function imagePath(folder: string, fileName: string): string {
  return `/images/${folder}/${fileName}`;
}

export const NEW_PROJECTS: NewProjectDetail[] = [
  {
    folder: "FGS",
    slug: "fgs",
    title: "FGS",
    category: "Inventory Management App",
    cardImage: imagePath("FGS", "card.webp"),
    shortDescription:
      "A high-performance inventory management app with clean operations flow, stock visibility, and fast everyday usage.",
    fullDescription:
      "FGS is an inventory management app built for teams that need reliable stock operations without friction. The product focuses on fast item lookup, live quantity tracking, role-based workflows, and an interface that stays clear even with large catalogs.",
    technologies: ["React Native", "TypeScript", "Firebase", "REST API", "Role-based Access"],
    keyHighlights: [
      "Live inventory quantity updates",
      "Quick product search and filtering",
      "Low-stock and restock workflow",
      "Warehouse-friendly mobile UX",
      "Role-based operational control",
    ],
    challenges: [
      {
        title: "Large catalog responsiveness",
        challenge: "Rendering large product lists caused sluggish navigation on mid-range devices.",
        solution: "Implemented list optimization, lazy item rendering, and lightweight card components for smooth scrolling.",
      },
      {
        title: "Stock consistency",
        challenge: "Concurrent inventory updates from multiple users risked mismatched counts.",
        solution: "Added atomic update strategy and strict mutation flow to keep counts accurate in real time.",
      },
      {
        title: "Operational clarity",
        challenge: "Complex inventory actions were hard to track for non-technical users.",
        solution: "Designed clear status indicators and guided action patterns to reduce mistakes and speed up tasks.",
      },
    ],
    screenshots: [
      imagePath("FGS", "6.5_ _ 1.webp"),
      imagePath("FGS", "6.5_ _ 3.webp"),
      imagePath("FGS", "6.5_ _ 4.webp"),
      imagePath("FGS", "6.5_ _ 5.webp"),
    ],
    screenshotLabels: [
      "Inventory Dashboard",
      "Product Listing",
      "Stock Detail View",
      "Operational Action Screen",
    ],
  },
  {
    folder: "FibberAI",
    slug: "fibber-ai",
    title: "Fibber AI",
    category: "Voice Analysis AI App",
    cardImage: imagePath("FibberAI", "8.webp"),
    shortDescription:
      "A voice analysis AI app that transforms speech signals into practical insights through a fast and elegant interface.",
    fullDescription:
      "Fibber AI is a voice analysis AI-based application designed to process spoken input and present meaningful analysis quickly. It combines AI inference workflows with a user interface focused on trust, clarity, and clean insight presentation.",
    technologies: ["Next.js", "TypeScript", "AI APIs", "Tailwind CSS", "Node.js"],
    keyHighlights: [
      "Voice upload and analysis pipeline",
      "Fast AI-result rendering",
      "Insight-first result presentation",
      "Responsive dashboard experience",
      "Scalable API integration approach",
    ],
    challenges: [
      {
        title: "Inference latency perception",
        challenge: "Users perceived AI analysis as slow without visible progress feedback.",
        solution: "Introduced staged progress states and optimistic UI transitions to make processing feel immediate and transparent.",
      },
      {
        title: "Complex result readability",
        challenge: "Raw analysis output was difficult for users to interpret quickly.",
        solution: "Structured output into prioritized insight blocks with clearer hierarchy and action-oriented summaries.",
      },
      {
        title: "Cross-device consistency",
        challenge: "Voice upload and result screens behaved differently across device sizes.",
        solution: "Refined responsive layout rules and interaction breakpoints for stable behavior on mobile and desktop.",
      },
    ],
    screenshots: [
      imagePath("FibberAI", "8.webp"),
      imagePath("FibberAI", "9.webp"),
      imagePath("FibberAI", "2049.webp"),
      imagePath("FibberAI", "5 (1).webp"),
      imagePath("FibberAI", "7.webp"),
      imagePath("FibberAI", "11.webp"),
    ],
    screenshotLabels: [
      "Home screen",
      "AI Analysis results screen",
      "AI Speech Analysis",
      "Payment Plans",
      "Payment successfully",
      "Failed Payment screen",
    ],
  },
  {
    folder: "SpendSail",
    slug: "spendsail",
    title: "SpendSail",
    category: "AI Expense Management App",
    cardImage: imagePath("SpendSail", "card.webp"),
    shortDescription:
      "An AI expense management app that simplifies tracking, categorization, and financial visibility for daily users and teams.",
    fullDescription:
      "SpendSail is an AI-powered expense management app focused on helping users understand where money goes and how to optimize spending. It combines automatic categorization, clean reporting, and smart summaries in a polished, easy-to-use product experience.",
    technologies: ["Next.js", "React", "TypeScript", "Data Visualization", "AI Categorization"],
    keyHighlights: [
      "AI-assisted expense categorization",
      "Clear budget and spending breakdowns",
      "Fast transaction browsing",
      "Insight cards for decision making",
      "Mobile-first finance UX",
    ],
    challenges: [
      {
        title: "Data-dense screen design",
        challenge: "Financial dashboards became visually heavy and hard to scan quickly.",
        solution: "Reworked hierarchy with modular cards, tighter spacing rhythm, and prominent insight surfaces.",
      },
      {
        title: "Category confidence",
        challenge: "AI predictions needed user trust and easy correction paths.",
        solution: "Added transparent category cues and quick-edit actions to keep control with the user.",
      },
      {
        title: "Performance with growing history",
        challenge: "Large expense histories risked slower list rendering and filtering.",
        solution: "Applied optimized list rendering and lean filter state handling for smooth interactions.",
      },
    ],
    screenshots: [
      imagePath("SpendSail", "1.webp"),
      imagePath("SpendSail", "2.webp"),
      imagePath("SpendSail", "3.webp"),
      imagePath("SpendSail", "4.webp"),
      imagePath("SpendSail", "5.webp"),
    ],
    screenshotLabels: [
      "Expense Dashboard",
      "Transactions Overview",
      "Budget Insights",
      "Category Analytics",
      "AI Recommendations",
    ],
  },
];

export const NEW_PROJECTS_BY_FOLDER = new Map(
  NEW_PROJECTS.map((project) => [project.folder.toLowerCase(), project]),
);

export const NEW_PROJECTS_BY_SLUG = new Map(
  NEW_PROJECTS.map((project) => [project.slug, project]),
);
