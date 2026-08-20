import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { AngledDivider, LMark } from "@/components/ui/angled-divider";

export const metadata: Metadata = {
  title: "Style Guide",
  description: "Internal component reference for the Ultra Pros design system.",
  robots: { index: false, follow: false },
};

// Small label above each variant cluster.
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 font-heading text-xs font-medium uppercase tracking-[0.05em] text-brand-text-secondary">
      {children}
    </p>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-brand-border py-12">
      <SectionHeading eyebrow="Component" title={title} className="mb-8" />
      {children}
    </section>
  );
}

export default function StyleGuidePage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Page header */}
      <header className="mb-4">
        <div className="mb-6 flex items-center gap-3">
          <LMark className="h-8 w-8" />
          <Badge variant="tint">Internal · not indexed</Badge>
        </div>
        <SectionHeading
          eyebrow="Design System"
          title="Ultra Pros — UI Primitives"
          subtitle="A working reference for the core reusable components. Built to BRAND_GUIDELINES §6. Delete this route before launch."
        />
      </header>

      {/* Buttons */}
      <Block title="Button">
        <Label>Variants</Label>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Book a Consultation</Button>
          <Button variant="secondary">Our Services</Button>
          <Button variant="outline">Learn More</Button>
          <Button variant="ghost">Ghost</Button>
        </div>

        <div className="mt-8">
          <Label>Sizes</Label>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        <div className="mt-8">
          <Label>With icon · disabled</Label>
          <div className="flex flex-wrap items-center gap-4">
            <Button>
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button variant="outline" disabled>
              Disabled
            </Button>
          </div>
        </div>
      </Block>

      {/* Badges */}
      <Block title="Badge / Tag">
        <Label>Variants</Label>
        <div className="flex flex-wrap items-center gap-3">
          <Badge variant="solid">SEO</Badge>
          <Badge variant="tint">Paid Media</Badge>
          <Badge variant="navy">Web Development</Badge>
          <Badge variant="outline">Branding</Badge>
        </div>

        <div className="mt-8">
          <Label>Clipped corner (logo motif)</Label>
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="solid" clipped>
              Case Study
            </Badge>
            <Badge variant="navy" clipped>
              Featured
            </Badge>
          </div>
        </div>
      </Block>

      {/* Cards */}
      <Block title="Card">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>White card</CardTitle>
              <CardDescription>
                Default surface with a 1px border. Use for most content blocks.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Badge variant="tint">Static</Badge>
            </CardContent>
          </Card>

          <Card variant="surface">
            <CardHeader>
              <CardTitle>Surface card</CardTitle>
              <CardDescription>
                Light grayish-blue background for subtle contrast against white
                sections.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Badge variant="outline">#E8EEF2</Badge>
            </CardContent>
          </Card>

          <Card hoverable>
            <CardHeader>
              <CardTitle>Hoverable card</CardTitle>
              <CardDescription>
                Hover me — slight lift + yellow accent border for interactive
                cards (services, case studies).
              </CardDescription>
            </CardHeader>
            <CardFooter className="pt-4">
              <a
                href="#"
                className="inline-flex items-center gap-1 font-heading text-sm font-semibold text-brand-navy transition-colors hover:text-brand-yellow-hover"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </CardFooter>
          </Card>
        </div>
      </Block>

      {/* Section heading */}
      <Block title="SectionHeading">
        <div className="space-y-12">
          <div>
            <Label>Left aligned</Label>
            <SectionHeading
              eyebrow="What we do"
              title="Marketing that moves the numbers"
              subtitle="We turn traffic into revenue with strategy, not guesswork."
            />
          </div>
          <div>
            <Label>Center aligned</Label>
            <SectionHeading
              align="center"
              eyebrow="Why Ultra Pros"
              title="Fast, confident, results-obsessed"
              subtitle="No fluff — just campaigns engineered to perform and reporting you can actually read."
            />
          </div>
        </div>
      </Block>

      {/* Angled divider */}
      <Block title="AngledDivider">
        <div className="space-y-10">
          <div>
            <Label>Line · left cap</Label>
            <AngledDivider />
          </div>
          <div>
            <Label>Line · center</Label>
            <AngledDivider align="center" />
          </div>
          <div>
            <Label>Mark (standalone motif)</Label>
            <AngledDivider variant="mark" className="h-8 w-8" />
          </div>
        </div>
      </Block>

      {/* Stat counters */}
      <Block title="StatCounter">
        <Label>On light (scroll into view to animate)</Label>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <StatCounter value={200} suffix="+" label="Clients Served" />
          <StatCounter value={181} suffix="M" label="Sales Generated" />
          <StatCounter value={8} suffix="+" label="Years Active" />
          <StatCounter value={95} suffix="%" label="Client Retention" />
        </div>

        <div className="mt-10">
          <Label>On dark</Label>
          <div className="rounded-md bg-brand-navy px-6 py-12">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              <StatCounter tone="dark" value={500} suffix="+" label="Projects Delivered" />
              <StatCounter tone="dark" value={20} suffix="K+" label="Leads Booked" />
              <StatCounter tone="dark" value={4.9} decimals={1} label="Avg. Rating" />
              <StatCounter tone="dark" value={30} suffix="+" label="Team Members" />
            </div>
          </div>
        </div>
      </Block>
    </main>
  );
}
