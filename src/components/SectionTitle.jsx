/**
 * Reusable section title with eyebrow label and gradient accent.
 */
export default function SectionTitle({ eyebrow, title, accent, description }) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
        {title} {accent && <span className="text-gradient">{accent}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-base text-ink-muted">{description}</p>
      )}
    </div>
  );
}
