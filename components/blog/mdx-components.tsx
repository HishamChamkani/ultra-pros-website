import type { MDXComponents } from "mdx/types";

/**
 * Brand-styled MDX element overrides for blog post bodies
 * (type scale per BRAND_GUIDELINES §4). Passed to compileMDX.
 */
export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 mb-4 font-heading text-2xl font-bold tracking-tight text-brand-navy sm:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-8 mb-3 font-heading text-xl font-semibold text-brand-navy"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-5 text-lg leading-relaxed text-brand-navy/85" {...props} />
  ),
  ul: (props) => (
    <ul className="my-5 list-disc space-y-2 pl-6 text-lg text-brand-navy/85" {...props} />
  ),
  ol: (props) => (
    <ol className="my-5 list-decimal space-y-2 pl-6 text-lg text-brand-navy/85" {...props} />
  ),
  li: (props) => <li className="leading-relaxed marker:text-brand-yellow-hover" {...props} />,
  a: (props) => (
    <a
      className="font-medium text-brand-navy underline decoration-brand-yellow decoration-2 underline-offset-2 transition-colors hover:decoration-brand-yellow-hover"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="my-8 border-l-4 border-brand-yellow pl-5 font-heading text-xl italic text-brand-navy"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold text-brand-navy" {...props} />,
  hr: (props) => <hr className="my-10 border-brand-border" {...props} />,
  code: (props) => (
    <code
      className="rounded-sm bg-brand-surface px-1.5 py-0.5 text-[0.9em] text-brand-navy"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-md bg-brand-navy p-4 text-sm text-white"
      {...props}
    />
  ),
};
