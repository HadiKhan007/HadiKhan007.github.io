import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-20">
      <div className="section-shell py-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">Ali Haider</p>
          <p className="text-sm text-[var(--text-muted)]">React Native Developer, Lahore</p>
        </div>
        <div className="flex items-center gap-4 text-[var(--text-secondary)]">
          <Link href="/projects/" className="hover:text-[var(--text-primary)] text-sm">Projects</Link>
          <a href="mailto:alihaidercs17@gmail.com" className="hover:text-[var(--text-primary)] text-sm">Email</a>
          <a href="https://www.linkedin.com/in/alihaider17/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/HadiKhan007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
        </div>
      </div>
      <div className="section-shell pb-6 sm:hidden flex justify-center">
        <a
          href="#"
          aria-label="Back to top"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
        >
          <FaArrowUp className="text-sm" />
        </a>
      </div>
    </footer>
  );
}
