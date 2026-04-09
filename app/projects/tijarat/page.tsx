import ProjectDetailPage from "../../../components/projects/ProjectDetailPage";

export default function TijaratPage() {
  return (
    <ProjectDetailPage
      title="Tijarat"
      category="Multi-vendor eCommerce Platform"
      description="A full-featured multi-vendor eCommerce platform for buyers and sellers with secure checkout, scalable catalog management, and smooth shopping workflows."
      technologies={[
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe",
        "JWT Authentication",
        "Socket.io",
        "Cloudinary",
      ]}
      keyHighlights={[
        "Multi-vendor marketplace architecture",
        "Secure payment workflow with Stripe",
        "Seller dashboard and order management",
        "Advanced product filtering and search",
        "Real-time support and notifications",
        "Responsive mobile-first UX",
      ]}
      challenges={[
        {
          title: "Multi-vendor complexity",
          challenge: "Managing vendor roles, inventory, commissions, and order routing in one product.",
          solution: "Implemented role-based architecture with clear seller/buyer/admin flows.",
        },
        {
          title: "Scalability under catalog growth",
          challenge: "Large catalogs and active filtering can slow browsing.",
          solution: "Optimized APIs and query flow with pagination and selective payloads.",
        },
      ]}
      screenshots={[
        "/images/Tijarat/t1.webp",
        "/images/Tijarat/t2.webp",
        "/images/Tijarat/t3.webp",
        "/images/Tijarat/t4.webp",
        "/images/Tijarat/t5.webp",
        "/images/Tijarat/t6.webp",
      ]}
      screenshotLabels={[
        "Login",
        "Marketplace Home",
        "Seller Dashboard",
        "Order Detail",
        "All Products",
        "Shopping Cart",
      ]}
    />
  );
}
