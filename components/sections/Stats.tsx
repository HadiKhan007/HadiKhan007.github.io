"use client";

import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect } from "react";
import { FaLayerGroup, FaHandshake, FaRocket, FaAward } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 75, damping: 15 });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { number: 50, suffix: "+", label: "Production features delivered", icon: FaLayerGroup },
  { number: 12, suffix: "+", label: "Long-term clients", icon: FaHandshake },
  { number: 15, suffix: "+", label: "Live deployments", icon: FaRocket },
  { number: 4.5, suffix: "+", label: "Years experience", icon: FaAward },
];

export default function Stats() {
  return (
    <Section spacing="tight" className="border-y border-[var(--border-subtle)]">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-4 text-[var(--primary)] text-2xl" />
              <div className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-1">
                <AnimatedCounter value={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-[var(--text-muted)] text-sm font-medium leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
