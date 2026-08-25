import Image from "next/image";
import { Linkedin } from "lucide-react";

import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { LogoMark } from "@/components/icons/LogoMark";
import { team } from "@/content/team";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function Team() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <SectionHeading
          align="center"
          eyebrow="The team"
          title="The people behind the results"
          subtitle="Senior strategists and creatives who treat your growth like their own."
          className="mx-auto mb-12"
        />
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <li key={member.name}>
              <Card hoverable className="overflow-hidden">
                {/* Full-bleed 4:5 portrait headshot — edge-to-edge at the top of the
                    card. object-top keeps faces in frame; consistent for all members. */}
                <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden bg-gradient-to-br from-brand-navy to-brand-navy-tint">
                  <LogoMark className="pointer-events-none absolute right-3 top-3 z-10 h-6 w-6 opacity-90 drop-shadow-[0_1px_2px_rgba(20,34,50,0.5)]" />
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.role} at Ultra Pros`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    // Initials fallback — replace with a real headshot (see content/team.ts)
                    <span className="font-heading text-5xl font-bold text-white/80">
                      {initials(member.name)}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3">
                  <div className="min-w-0">
                    <p className="font-heading text-base font-semibold leading-tight text-brand-navy">
                      {member.name}
                    </p>
                    <p className="mt-0.5 text-sm leading-tight text-brand-text-secondary">
                      {member.role}
                    </p>
                  </div>
                  {member.linkedin ? (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-brand-border text-brand-navy transition-colors hover:border-brand-yellow hover:text-brand-yellow-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
                    >
                      <Linkedin className="h-4 w-4" aria-hidden />
                    </a>
                  ) : null}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
