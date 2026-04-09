import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const WHATSAPP_LINK = "https://wa.me/923000065409";

const kpis = [
  { value: "4.5+", label: "Years Building Products" },
  { value: "20+", label: "Client Projects Shipped" },
  { value: "100%", label: "On-Time Delivery Focus" },
];

export default function HeroSection() {
  return (
    <section className="section-shell pt-4 sm:pt-6">
      <div className="premium-card hero-glass p-5 sm:p-8 lg:p-10">
        <p className="section-kicker mb-4">
          Premium React Native Engineering
        </p>
        <h1
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-[1.15] max-w-3xl"
          style={{
            backgroundImage: "linear-gradient(120deg, #e7ebff 20%, #8ea2ff 55%, #b58cff 95%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Ali Haider builds startup-ready apps that feel fast, polished, and built to convert.
        </h1>
        <p className="mt-5 max-w-2xl text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
          I help founders ship web and mobile products with clean architecture, modern UI/UX,
          and production-grade performance from day one.
        </p>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a Call
            <FaArrowRight className="text-xs" />
          </a>
          <Link href="/projects/" className="btn-primary btn-secondary">
            View Projects
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
          {kpis.map((item) => (
            <div key={item.label} className="premium-card p-4">
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className="text-sm text-[var(--text-muted)] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
