/**
 * Renders a JSON-LD structured-data script. Server component.
 * `data` is serialized as-is — only pass trusted, app-controlled objects.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
