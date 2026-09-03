import { SectionHeading } from "@/components/ui/section-heading";
import { BlogList } from "@/components/blog/BlogList";
import { CtaBanner } from "@/components/layout/CtaBanner";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, getAllCategories } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical digital marketing insight from the Ultra Pros team, paid media, SEO, social, and content strategy with no filler.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllPosts();
  const categories = getAllCategories();

  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionHeading
            as="h1"
            eyebrow="The Blog"
            title="Ideas worth your time"
            subtitle="Practical marketing insight from the team, the stuff we'd tell a client over coffee."
            className="mb-12 max-w-2xl"
          />
          <BlogList posts={posts} categories={categories} />
        </div>
      </section>

      <CtaBanner
        title="Want results, not just reading?"
        subtitle="Book a free consultation and let's put these ideas to work for your business."
        cta={{ label: "Book a Consultation", href: "/contact" }}
        tone="yellow"
      />
    </>
  );
}
