// SU DI ME — bio + soft skill, data-driven da profile.ts.

import { profile } from "@/data/profile";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";

export default function About() {
  const { bio, softSkills } = profile;

  return (
    <Section id="su-di-me">
      <SectionHeading kicker="Chi sono" title="Su di me" />

      <Reveal className="max-w-2xl space-y-5 text-lg leading-relaxed text-text-muted">
        {bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </Reveal>

      {softSkills.length > 0 && (
        <Reveal delay={0.1} className="mt-8 flex flex-wrap gap-2.5">
          {softSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-surface/60 px-4 py-1.5 text-sm text-text"
            >
              {skill}
            </span>
          ))}
        </Reveal>
      )}
    </Section>
  );
}
